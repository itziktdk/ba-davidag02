// firebase.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import firebase from 'firebase';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  collectionName = 'Customers';
  intk = 0;

  constructor(
    private firestore: AngularFirestore,
    private launchNavigator: LaunchNavigator,
    private callNumber: CallNumber
  ) { }

  create_customer(record) {
    return this.firestore.collection(this.collectionName).add(record);
  }

  read_customers() {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  update_customer(recordID, record) {
    this.firestore.doc(this.collectionName + '/' + recordID).update(record);
  }

  delete_customer(recordId) {
    this.firestore.doc(this.collectionName + '/' + recordId).delete();
  }

  // START Doctors

  // addDoctors(data: any) {
  //   const now = new Date();
  //   const currentDateTime = now.getDate() + now.getTime();
  //   return this.firestore.collection(`pharms`).add(data);
  // }

  getDoctors() {
    return this.firestore.collection('/doctors').valueChanges();
  }

  goNavigate(location: string) {
    const OPTS: LaunchNavigatorOptions = {
      start: 'אשתאול 4 חולון',
      app: this.launchNavigator.APP.WAZE
    };

    return this.launchNavigator.navigate(location ? location : 'אלנבי 80 תל אביב', OPTS);
  }

  // tslint:disable-next-line:variable-name
  goCallDial(number: string) {
    return this.callNumber.callNumber(number, true);
  }

  // END Doctors

  // START Pharmacy
  getPharmacyList() {
    return this.firestore.collection('/pharms').valueChanges();
  }

  addReserveOrders(data: any) {
    return this.firestore.collection(`/reserveOrders`).add(data);
    // const ref = firebase.database().ref(`reserveOrders/${data.user.uid}/`);
    // return ref.once('value', function (snapshot) {
    //   return ref.update(data);
    // });
  }

  addReserveOrderNotification(data: any) {
    return this.firestore.collection(`/reserve-notification`).add(data);
    // const ref = firebase.database().ref(`reserveOrders/${data.user.uid}/`);
    // return ref.once('value', function (snapshot) {
    //   return ref.update(data);
    // });
  }

  async addUserReserveOrders(data: any) {

    const arr = [];
    arr[data.product.name] = data;

    this.getUserData(data.user.uid);
    let UData = [];
    const userRef = this.firestore.collection('userData').doc(data.user.uid);
    userRef.valueChanges()
      .subscribe((userData: any) => {
        if (!userData.exists && !userData.userOrders) {
          console.log('No such document!');
          UData.push(data);
          const obj = {
            userOrders: UData
          };
          return this.firestore.collection(`userData`).doc(data.user.uid).set(obj);
        } else {
          console.log('Document data:', userData);
          UData = userData.userOrders;
          UData.push(data);
          const obj = {
            userOrders: UData
          };
          return this.firestore.collection(`userData`).doc(data.user.uid).update(obj);
        }

        // return firebase.database().ref(`/userReserveOrders/${data.user.uid}`).set(arr);
        // return this.firestore.collection(`/userReserveOrders`).doc(data.user.uid).set(data);  
      });
  }

  getUserData(userId) {
    return this.firestore.collection('/userData').valueChanges();
  }

  sendPush() {
    console.log('toekP', localStorage.getItem('tokenP'));
    const data = {
      notification: {
        title: 'Ionic 4 Notification',
        body: 'This notification sent from POSTMAN using Firebase HTTP protocol',
        sound: 'default',
        click_action: 'FCM_PLUGIN_ACTIVITY',
        icon: 'fcm_push_icon'
      },
      data: {
        landing_page: 'second',
        price: '$3,000.00'
      },
      to: localStorage.getItem('tokenP'),
      priority: 'high',
      restricted_package_name: ''
    };
  }
  // END Pharmacy


  // START Products
  getProducts() {
    return this.firestore.collection('/products').valueChanges();
  }
  // END Products

  // START AdminPanel
  getReserveOrders() {
    return this.firestore.collection('/reserveOrders').valueChanges({ idField: 'orderId' });
  }
  // END AdminPanel

  UpdateOrderReserve(orderId: string, item: any) {
    return this.firestore.collection('/reserveOrders').doc(orderId).update(item);
  }

  orderIncrement() {
    //this.intk = this.firestore.collection('/orderSerial').doc('tJ3P2iC0O377gAb1e9Fs').collection('int');
  }
}
