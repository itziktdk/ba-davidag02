import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from './firebase.config';

import { FCM } from '@ionic-native/fcm/ngx';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';
import { FirebaseService } from './services/firebase.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fcm: FCM,
    private fService: FirebaseService,
  ) {
    this.initializeApp();
    this.sendPushNotification();
  }

  sendPushNotification() {
    this.fService.sendPush();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  initPushNotification() {
    this.fcm.getToken().then(token => {
      console.log(token);
      localStorage.setItem('tokenP', token);
    });

    this.fcm.onTokenRefresh().subscribe(token => {
      console.log(token);
    });

    // Recieve Push notification
    this.fcm.onNotification().subscribe(data => {
      console.log(data);
      if (data.wasTapped) {
        console.log('Received in background');
        // this.router.navigate([data.landing_page, data.price]);
      } else {
        console.log('Received in foreground');
        // this.router.navigate([data.landing_page, data.price]);
      }
    });
  }
}
