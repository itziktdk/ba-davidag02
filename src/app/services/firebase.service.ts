// firebase.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import firebase from 'firebase';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Injectable({
  providedIn: 'root'
})
export class SingletonService {
  public loginState = false;
  public userinfo = [];
}
export class FirebaseService {

  collectionName = 'Customers';

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

  // Doctors

  // addDoctors(data: any) {
  //   const now = new Date();
  //   const currentDateTime = now.getDate() + now.getTime();
  //   return this.firestore.collection(`doctors`).add(data);
  // }

  getDoctors() {
    return this.firestore.collection('/doctors').valueChanges();
  }

  goNavigate(location: string) {
    const OPTS: LaunchNavigatorOptions = {
      start: 'אשתאול 4 חולון',
      app: this.launchNavigator.APP.WAZE
    };

    return this.launchNavigator.navigate(location ? location : 'אלנבי 80 תל אביב', OPTS)
  }

  // tslint:disable-next-line:variable-name
  goCallDial(number: string) {
    return this.callNumber.callNumber(number, true)
  }
}
