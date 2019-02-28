package com.firstapp;

/**
 * Created by liuyuchuan on 2019/2/27.
 */

import android.os.Bundle;
import android.os.PersistableBundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.widget.TextView;
import android.widget.Toast;

import org.w3c.dom.Text;


public class MyNativePageActivity extends AppCompatActivity {
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        String params = getIntent().getStringExtra("params");
        Toast.makeText(this, "RN页面你这个家伙给我传的啥玩意!" + params, Toast.LENGTH_LONG).show();
        Log.i("gsc", "RN页面你这个家伙给我传的啥玩意!" + params);
        TextView tv = new TextView(this);
        tv.setText("I am android  原生页面" + getClass().getSimpleName());
        setContentView(tv);
    }
}

