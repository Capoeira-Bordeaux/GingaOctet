package com.gingaoctet;

import android.content.Intent;
import com.facebook.react.ReactActivity;
import com.facebook.CallbackManager;

public class MainActivity extends ReactActivity {

    CallbackManager mCallbackManager;

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "GingaOctet";
    }
}
