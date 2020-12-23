import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AppModule } from '../app.module';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

@Component({
  selector: 'app-searchdoc',
  templateUrl: './searchdoc.page.html',
  styleUrls: ['./searchdoc.page.scss'],
})

export class SearchdocPage implements OnInit {

  latitude: any = 0; // latitude
  longitude: any = 0; // longitude
  hx: any;

  constructor(private geolocation: Geolocation, private nativeGeocoder: NativeGeocoder) {
   }

  locationWatchStarted: boolean;
  locationSubscription: any;
  locationTraces = [];
  dis1: any;
   options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 1
};

      hd = this.locationTraces[0];


  ngOnInit() {
    this.nativeGeocoder.reverseGeocode(52.5072095, 13.1452818, this.options)
    .then((result: NativeGeocoderResult[]) => {
      this.hx = JSON.stringify(result[0]);
    }

    )
    .catch((error: any) => console.log(error));
  
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;


      });


  }

  getCoordinates() {

    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.locationTraces.push({
        latitude: resp.coords.latitude,
        longitude: resp.coords.longitude,
        accuracy: resp.coords.accuracy,
        timestamp: resp.timestamp

      });

    }).catch((error) => {
        console.log('Error getting location', error);
      });


  }
}
