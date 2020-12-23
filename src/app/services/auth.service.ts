import { Injectable } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import firebase from 'firebase/app';
import { combineAll } from 'rxjs/operators';
import { AlertService } from './alert.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavigationExtras } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userid: string;

  constructor(public store: AngularFirestore,
              private navCtrl: NavController,
              private Alert: AlertService,
              public Alerts: AlertController) { }
  signInMethod: any;
  loginUser(
    email: string,
  ){
      firebase.auth().signInWithEmailAndPassword(email, 'randoaam-password-added')  
        .then((response) => {
          })
            .catch((error) => {
        if (error.code === 'auth/wrong-password'){
          this.getpassword(email);
           }
        else if (error.code === 'auth/user-not-found'){
          this.navCtrl.navigateBack('register1', {state: {data: email}});
       }
        else if (error.code === 'auth/invalid-email'){
          this.Alert.email();
        }
});
  }

  login(
    email: string,
    password: string,

  ){
    console.log(email, password);
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
    this.Alert.Signin();
    const navigationExtras: NavigationExtras = {
      state: {
        signedin: true,
      }
    };
    this.navCtrl.navigateForward('home', navigationExtras);
  });
  }

  register(
    email: string,
    password: string,  
    userdata: any,
  ){
    console.log(email, password, userdata);
    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
    this.userid = firebase.auth().currentUser.uid;
    this.store.doc(`users/${this.userid}`).set({
      userdata
    });
    this.presentAlert('ברוך הבא למערכת', 'נרשמת בהצלחה :)');
    const navigationExtras: NavigationExtras = {
      state: {
        step2: true,
      }
    };
    this.navCtrl.navigateForward('register1', navigationExtras);
  });
  }

	async presentAlert(title: string, content: string) {
		const alert = await this.Alerts.create({
			header: title,
			message: content,
			buttons: ['אישור']
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
}

  

