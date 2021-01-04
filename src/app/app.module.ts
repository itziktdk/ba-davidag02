import { ProductmodalPageModule } from './modals/productmodal/productmodal.module';
import { DocmodalPageModule } from './modals/docmodal/docmodal.module';
import { PharmodalPageModule } from './modals/pharmodal/pharmodal.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

import {SingletonService} from './services/firebase.service';
import { environment } from '../environments/environment';
import { Camera } from '@ionic-native/camera/ngx';
import { LaunchNavigator } from '@ionic-native/launch-navigator/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
@NgModule({
  declarations: [
    AppComponent],

  entryComponents: [],

  imports: [
    BrowserModule, IonicModule.forRoot({ mode: 'md' }),
    AppRoutingModule,
    PharmodalPageModule,
    ProductmodalPageModule,
    DocmodalPageModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule],

  providers: [
    StatusBar,
    SplashScreen,
    GooglePlus,
    Camera,
    Geolocation,
    NativeGeocoder,
    SingletonService,
    LaunchNavigator,
    CallNumber,
    InAppBrowser,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
