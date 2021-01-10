import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AppModule } from '../app.module';

import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { FirebaseService } from '../services/firebase.service';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-searchdoc',
  templateUrl: './searchdoc.page.html',
  styleUrls: ['./searchdoc.page.scss'],
})

export class SearchdocPage implements OnInit {

  pharmacyList: Array<any>;
  filteredPharmacyListALL: Array<any> = [];
  filteredPharmacyListLOCATION: Array<any> = [];
  filteredPharmacyList: Array<any> = [];
  searchValue1: any;
  searchValue2: any;

  latitude: any = 0; // latitude
  longitude: any = 0; // longitude
  hx: any;
  dds: any;

  ttt1: any;
  locationWatchStarted: boolean;
  locationSubscription: any;
  locationTraces = [];
  dis1: any;
  options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 1
  };

  hd = this.locationTraces[0];

  constructor(
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    private navCtrl: NavController,
    private alertService: AlertService,
    private fService: FirebaseService) { }


  ngOnInit() {
    this.performGetAllPharmacies();

    this.nativeGeocoder.reverseGeocode(52.5072095, 13.1452818, this.options)
      .then((result: NativeGeocoderResult[]) => {
        this.ttt1 = JSON.stringify(result[0]);
        console.log(this.ttt1);
      })
      .catch((error: any) => console.log(error));

    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      console.log(this.latitude, ' and ', this.longitude);
    });
  }

  performGetAllPharmacies() {
    this.fService.getPharmacyList()
      .subscribe((result: any) => {
        this.pharmacyList = result;
      });
  }

  filterPharmacy(event) {
    const val = event;
    if (val === '' || !val) {
      this.filteredPharmacyList = this.pharmacyList;
      return;
    }
    if (this.filteredPharmacyList && this.filteredPharmacyList.length > 0) {
      const filterPharmacyList1 = [];
      this.filteredPharmacyList.filter(d => {
        for (const key in d) {
          if (d[key].toString().toLowerCase().indexOf(val) !== -1) {
            filterPharmacyList1.push(d);
            return;
          }
        }
      });
      this.filteredPharmacyList = filterPharmacyList1;
      // if (filterPharmacyList1 && filterPharmacyList1.length > 0) {
      //   this.filteredPharmacyList = filterPharmacyList1;
      // }
    } else {
      let tepmArr = [];
      if (this.filteredPharmacyListLOCATION && this.filteredPharmacyListLOCATION.length > 0) {
        tepmArr = this.filteredPharmacyListLOCATION;
      } else {
        tepmArr = this.pharmacyList;
      }
      const filterPharmacyList2 = [];
      tepmArr.filter(d => {
        for (const key in d) {
          if (d[key].toString().toLowerCase().indexOf(val) !== -1) {
            filterPharmacyList2.push(d);
            return;
          }
        }
      });
      this.filteredPharmacyList = filterPharmacyList2;
      // if (filterPharmacyList2 && filterPharmacyList2.length > 0) {
      //   this.filteredPharmacyList = filterPharmacyList2;
      // }
    }
  }

  filterByCity(event) {
    if (event.target.value === '' || !event.target.value) {
      this.filteredPharmacyList = this.pharmacyList;
      return;
    }
    if (this.filteredPharmacyList && this.filteredPharmacyList.length > 0) {
      const filterPharmacyList1 = this.filteredPharmacyList.filter(x => x.city === event.target.value);
      this.filteredPharmacyList = filterPharmacyList1;
      // if (filterPharmacyList1 && filterPharmacyList1.length > 0) {
      //   this.filteredPharmacyList = filterPharmacyList1;
      // }
    } else {
      let tepmArr = [];
      if (this.filteredPharmacyListALL && this.filteredPharmacyListALL.length > 0) {
        tepmArr = this.filteredPharmacyListALL;
      } else {
        tepmArr = this.pharmacyList;
      }
      const filterPharmacyList2 = tepmArr.filter(x => x.city === event.target.value);
      this.filteredPharmacyList = filterPharmacyList2;
      // if (filterPharmacyList2 && filterPharmacyList2.length > 0) {
      //   this.filteredPharmacyList = filterPharmacyList2;
      // }
    }
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

  onNavPharmacyList() {
    // this.fService.addDoctors({
    //   address: 'address: \'המרכבה 31 חצי חינם\'',
    //   city: 'חולון',
    //   pharmcode: '12121',
    //   phone: '46546464564564',
    //   rating: '5',
    //   inventory: [{
    //     productName: 'מוצר',
    //     description: 'שווה ביותר',
    //     qty: '3'
    //   },
    //   {
    //     productName: 'מוצר',
    //     description: 'שווה ביותר',
    //     qty: '7'
    //   }
    //   ],
    //   opening: [{
    //     from: 'מוצר',
    //     to: 'שווה ביותר',
    //     shortDay: '3',
    //     dayOff: '3',
    //     shortTo: '3'
    //   }]
    // });
    if ((!!this.searchValue1 && (!!this.filteredPharmacyList && this.filteredPharmacyList.length > 0)) ||
      (!!this.searchValue2 && (!!this.filteredPharmacyList && this.filteredPharmacyList.length > 0))) {
      const navigationExtras: NavigationExtras = {
        queryParams: {
          data: this.filteredPharmacyList && this.filteredPharmacyList.length > 0 ?
            JSON.stringify(this.filteredPharmacyList) : JSON.stringify(this.pharmacyList)
        }
      };
      this.navCtrl.navigateForward(['/pharmacies'], navigationExtras);
    } else {
      this.alertService.default('Alert', '\'לא נמצאו בתי מרקחת מתאימים\'');
    }
  }
}
