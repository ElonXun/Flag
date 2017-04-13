package com.flagchat_app;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import com.reactnativecomponent.amap.RCTAMapPackage;
import com.reactnativecomponent.amaplocation.RCTAMapLocationPackage;    //import package 

import com.reactnativecomponent.swiperefreshlayout.RCTSwipeRefreshLayoutPackage;    //import package
import com.aakashns.reactnativedialogs.ReactNativeDialogsPackage;


import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new VectorIconsPackage(),
              new RCTAMapPackage(),
                new RCTAMapLocationPackage(),
                  new RCTSwipeRefreshLayoutPackage(),  //register Module
                    new ReactNativeDialogsPackage() // add this manager
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
