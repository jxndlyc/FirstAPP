package com.firstapp.view;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.support.annotation.Nullable;
import android.util.Log;
import android.view.View;
import android.widget.ImageView;
import android.widget.Toast;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.RCTEventEmitter;
import com.firstapp.R;

import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Map;

/**
 * Created by liuyuchuan on 2019/2/28.
 */

public class ImageViewManager extends SimpleViewManager<ImageView>/* implements LifecycleEventListener*/ {

    private ThemedReactContext mContext;
    private static final String GIFVIEW_MANAGER_NAME = "GIFImageView";
    private static final String EVENT_NAME_ONCLICK = "onClick";
    private static final String HANDLE_METHOD_NAME = "handleTask"; // 交互方法名
    private static final int HANDLE_METHOD_ID = 1; // 交互命令ID

    @Override
    public String getName() {
        return GIFVIEW_MANAGER_NAME;
    }

    /**
     * 此处创建View实例，并返回
     *
     * @param reactContext
     * @return
     */
    @Override
    protected ImageView createViewInstance(ThemedReactContext reactContext) {
        this.mContext = reactContext;
        final ImageView imageView = new ImageView(reactContext);

        //this.mContext.addLifecycleEventListener(this);
        imageView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // 创建数据传递信使，类似于Android中的Bundle
                WritableMap data = Arguments.createMap();
                data.putString("msg", "点击了图片");// key用于在RN中获取传递的数据
                Log.e("onClick()", "点击了图片");
                mContext.getJSModule(RCTEventEmitter.class).receiveEvent(
                        imageView.getId(), // RN层原生层根据id绑定在一起
                        EVENT_NAME_ONCLICK, // 事件名称
                        data // 传递的数据
                );
            }
        });
        return imageView;
    }

    /**
     * 自定义事件
     *
     * @return
     */
    @Nullable
    @Override
    public Map getExportedCustomDirectEventTypeConstants() {
        return MapBuilder.of(EVENT_NAME_ONCLICK, MapBuilder.of("registrationName", EVENT_NAME_ONCLICK));
    }

    /**
     * 接收交互通知
     *
     * @return
     */
    @Nullable
    @Override
    public Map<String, Integer> getCommandsMap() {
        return MapBuilder.of(HANDLE_METHOD_NAME, HANDLE_METHOD_ID);
    }


    /**
     * 根据命令ID，处理对应任务
     *
     * @param root
     * @param commandId
     * @param args
     */
    @Override
    public void receiveCommand(ImageView root, int commandId, @Nullable ReadableArray args) {
        switch (commandId) {
            case HANDLE_METHOD_ID:
                if (args != null) {
                    String name = args.getString(0);//获取第一个位置的数据
                    Toast.makeText(mContext, "收到RN层的任务通知，开始在原生层处理任务...", Toast.LENGTH_SHORT).show();
                }
                break;
            default:
                break;
        }
    }


    @ReactProp(name = "imageName")
    public void setImageSrc(final ImageView image, String url) {
        // 加载url对应的图片
        Log.e("setImageSrc", url);
        Bitmap bitmap = returnBitMap(url);
        image.setImageBitmap(BitmapFactory.decodeResource(mContext.getResources(), R.mipmap.ic_launcher));
    }

    Bitmap bitmap;

    public Bitmap returnBitMap(final String url) {
        bitmap = BitmapFactory.decodeResource(mContext.getResources(), R.mipmap.ic_launcher);
        new Thread(new Runnable() {
            @Override
            public void run() {
                URL imageurl = null;

                try {
                    imageurl = new URL(url);
                } catch (MalformedURLException e) {
                    e.printStackTrace();
                }
                try {
                    HttpURLConnection conn = (HttpURLConnection) imageurl.openConnection();
                    conn.setDoInput(true);
                    conn.connect();
                    InputStream is = conn.getInputStream();
                    bitmap = BitmapFactory.decodeStream(is);
                    is.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }).start();

        return bitmap;
    }
}
