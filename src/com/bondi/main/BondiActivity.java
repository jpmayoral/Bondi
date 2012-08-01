package com.bondi.main;

import android.os.Bundle;
import android.app.Activity;
import android.view.Menu;

public class BondiActivity extends Activity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.bondi_activity);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.bondi_activity, menu);
        return true;
    }
}
