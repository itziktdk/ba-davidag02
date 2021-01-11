import { Injectable } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import firebase from 'firebase/app';
import { combineAll } from 'rxjs/operators';
import { AlertService } from './alert.service';
import { AngularFirestore } from '@angular/fire/firestore';

import { AuthenticationService } from './authentication.service';

import { NavigationExtras } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private firestore: AngularFirestore,
    public store: AngularFirestore,
    private navCtrl: NavController,
    private Alert: AlertService,
    public Alerts: AlertController,
    private authService: AuthenticationService) { }
  userid: string;
  signInMethod: any;
  loginUser(email: any) {
    throw new Error('Method not implemented.');
  }

  fetchUserRegistered(email: string) {


    return firebase.auth().fetchSignInMethodsForEmail(email);


    // firebase.auth().signInWithEmailAndPassword(email, 'randoaam-password-added')
    //   .then((response) => {
    //     console.log('response ', response)
    //   })
    //   .catch((error) => {
    //     if (error.code === 'auth/wrong-password') {
    //       this.getpassword(email);
    //     }
    //     else if (error.code === 'auth/user-not-found') {
    //       this.navCtrl.navigateBack('register1', { state: { data: email } });
    //     }
    //     else if (error.code === 'auth/invalid-email') {
    //       this.Alert.email();
    //     }
    //   });
  }

  fetchCurrentUser() {
    console.log(firebase.auth().currentUser);
  }

  login(email: string, password: string) {
    console.log(email, password);
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  async register(email: string, password: string, userdata: any): Promise<any> {
    console.log(email, password, userdata);
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  // updateUserDocumentDetails() {
  //   this.firestore.doc(this.collectionName + '/' + recordID).update(record);
  //   return firebase.database().ref(`users/${uid}`);

  //   return ref.update(value);
  // }

  async presentAlert(title: string, content: string) {
    const alert = await this.Alerts.create({
      header: title,
      message: content,
      buttons: ['OK']
    });

    await alert.present();
  }

  async getpassword(email) {
    const alert = await this.Alerts.create({
      cssClass: 'my-custom-class',
      header: 'הזדהות',
      inputs: [{
        name: 'password',
        type: 'password',
        placeholder: 'הקלד סיסמא',
        cssClass: 'specialClass',
        attributes: {
          inputmode: 'decimal'
        }
      }],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (alertData) => {
            this.login(email, alertData.password);
            console.log(alertData.password);

          }
        }
      ]
    });
    await alert.present();
  }

  async getCurrentUser(): Promise<any> {
    return firebase.auth().currentUser.uid;
  }

  signOutCurrentUser() {
    localStorage.clear();
    sessionStorage.clear();
    return firebase.auth().signOut();
  }

  getCurrentUserDetails() {
    return this.firestore.collection(`/users`).doc(`${localStorage.getItem('userId')}`).valueChanges();
    // return firebase.database().ref().child(`users/${localStorage.getItem('userId')}`);
  }
}



