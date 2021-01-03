import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(
    private afs: AngularFirestore) { }

  // localId
  getUserData(userID: string) {
    this.checlUserDataExist(userID);
    return firebase.database().ref(`users/${userID}`).once('value', (snapshot) => {
      return snapshot;
    });
  }

  checlUserDataExist(userID: string) {
    const docRef = this.afs.collection('users').doc(userID);
    return docRef.get();
  }
}
