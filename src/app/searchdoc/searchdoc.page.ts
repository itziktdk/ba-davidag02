import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AppModule } from '../app.module';

import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { FirebaseService } from '../services/firebase.service';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { AlertService } from '../services/alert.service';
// import { contains } from 'jquery';

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
  cityList: any = [];
  cities2 = [
    { id: 1, name: 'Vilnius' },
    { id: 2, name: 'Kaunas' },
    { id: 3, name: 'Pavilnys', disabled: true },
    { id: 4, name: 'Pabradė' },
    { id: 5, name: 'Klaipėda' }
  ];
  searchterm: any;
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
        console.log(result);
        // result.forEach(element => {
        //   // if (this.cityList.indexOf(element.city) == -1) {
        //   console.log('!this.cityList.includes(element.city ', !this.cityList.includes(element.city))
        //   console.log('this.cityList.includes(element.city ', this.cityList.includes(element.city))
        //   if (!this.cityList.includes(element.city)) {
        //     this.cityList.push({ id: element.city, name: element.city });
        //   }
        // });

        const duplicatePushArray = [];
        for (const i of result.keys()) {
          if (this.cityList.indexOf(result[i].city) === -1) {
            this.cityList.push(result[i].city);
          } else {
            console.log(`${result[i]} is already pushed into array`);
          }
        }

        // var filteredArray = this.cityList.reduce((accumalator, current) => {
        //   if (!accumalator.some(item => item.city === current.city)) {
        //     accumalator.push(current);
        //   }
        //   return accumalator;
        // }, []);
        console.log(this.cityList);

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
    this.searchterm = val;
    console.log(this.searchterm);
  }

  filterByCity(city) {
    if (city.id === '' || !city.id) {
      this.filteredPharmacyList = this.pharmacyList;
      return;
    }
    if (this.filteredPharmacyList && this.filteredPharmacyList.length > 0) {
      const filterPharmacyList1 = this.filteredPharmacyList.filter(x => x.city === city.id);
      this.filteredPharmacyList = filterPharmacyList1;
      console.log('1 ', this.filteredPharmacyList);
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
      const filterPharmacyList2 = tepmArr.filter(x => x.city === city.id);
      this.filteredPharmacyList = filterPharmacyList2;
      console.log('2 ', this.filteredPharmacyList);
      // if (filterPharmacyList2 && filterPharmacyList2.length > 0) {
      //   this.filteredPharmacyList = filterPharmacyList2;
      // }
    }
    this.searchterm = city.id;
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
    if ((!!this.searchValue1 && (!!this.filteredPharmacyList && this.filteredPharmacyList.length > 0)) ||
      (!!this.searchValue2 && (!!this.filteredPharmacyList && this.filteredPharmacyList.length > 0))) {
      const navigationExtras: NavigationExtras = {
        queryParams: {
          // data: this.filteredPharmacyList && this.filteredPharmacyList.length > 0 ?
          //   JSON.stringify(this.filteredPharmacyList) : JSON.stringify(this.pharmacyList)
          data: this.searchterm
        }
      };
      this.navCtrl.navigateForward(['/pharmacies'], navigationExtras);
    } else {
      this.alertService.default('Alert', 'לא נמצאו בתי מרקחת מתאימים');
    }
  }
}
