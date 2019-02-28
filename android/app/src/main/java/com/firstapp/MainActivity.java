package com.firstapp;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.view.View;
import android.widget.TextView;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "FirstApp";
    }

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //StatusBarCompat.compat(this, getResources().getColor(R.color.colorBaseTitle));
        setContentView(R.layout.activity_main);
        TextView tv_enter_rn = findViewById(R.id.tv_enter_rn);
        tv_enter_rn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(MainActivity.this, BaseRnActivity.class);
                startActivity(intent);
            }
        });
    }
}
