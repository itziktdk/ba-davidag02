import { Injectable } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import firebase from 'firebase/app';
import { combineAll } from 'rxjs/operators';
import { AlertService } from './alert.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthenticationService } from './authentication.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userid: string;
  signInMethod: any;

  constructor(
    public store: AngularFirestore,
    private navCtrl: NavController,
    private Alert: AlertService,
    public Alerts: AlertController,
    private authService: AuthenticationService) { }

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
      header: 'Sign In',
      inputs: [{
        name: 'password',
        type: 'password',
        placeholder: 'Enter Password',
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
}



