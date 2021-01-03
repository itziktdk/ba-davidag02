import { AlertController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { async } from '@angular/core/testing';
import { AlertService } from '../services/alert.service';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { LoadingController, Platform } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: any;
  public loading: any;
  public isGoogleLogin = false;
  public user = null;

  constructor(
    private navCtrl: NavController,
    public Alert: AlertService,
    private auth: AuthService,
    private userDataService: UserDataService,
    private router: Router,
    private alert: AlertController,
    public google: GooglePlus,
    public loadingController: LoadingController,

    private fireAuth: AngularFireAuth,
    private platform: Platform) { }
    public fireAuth: AngularFireAuth,

  async ngOnInit() {
    localStorage.removeItem('email');
    this.loading = await this.loadingController.create({
      message: 'Connecting ...'
    });
  }


  async loginUser(form): Promise<void> {
    this.auth.fetchUserRegistered(form.value.email)
      .then((res: any) => {
        console.log('res ', res);
        if (res.length > 0) {
          if (res === 'password' && res !== 'google.com') {
            this.navCtrl.navigateForward(['login2', { email: form.value.email }]);
          } else {
            this.navCtrl.navigateForward('home');
          }
        } else {
          this.navCtrl.navigateForward('register1');
        }
        // res ? ((res === 'password' && res !== 'google.com')) ?
        //   this.navCtrl.navigateForward(['login2', { email: form.value.email }]) : this.navCtrl.navigateForward('home') :
        //   this.navCtrl.navigateForward('register1');
      })
      .catch(err => {
        console.log(err);
      });

  async loginUser(form): Promise<void>{
    await this.auth.loginUser(form.value.email);
  }

  login() {
    this.navCtrl.navigateForward('login2');
  }

  doGoogleLogin() {
    let params: any;
    if (this.platform.is('cordova')) {
      if (this.platform.is('android')) {
        params = {
          webClientId: '259418705314-d7h6bm3e4o8u6000jq1vvttk1eeobs17.apps.googleusercontent.com', //  webclientID 'string'
          offline: true
        };
      } else {
        params = {};
      }
      this.google.login(params)
        .then((response) => {
          const { idToken, accessToken } = response;
          this.onLoginSuccess(idToken, accessToken);
        }).catch((error) => {
          console.log(error);
          alert('error:' + JSON.stringify(error));
        });
    } else {
      console.log('else...');
      this.fireAuth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider()).then((success: any) => {
        console.log('success in google login', success);
        // check new user or not
        if (success.user) {
          localStorage.setItem('userId', success.user.uid);
          localStorage.setItem('email', success.user.email);
          this.userDataService.checlUserDataExist(success.user.uid)
            .subscribe(snap => {
              if (!snap.exists) {
                this.navCtrl.navigateBack('register1');
              } else {
                this.navCtrl.navigateBack('home');
                this.Alert.Signin();
              }
            });
          this.isGoogleLogin = true;
          this.user = success.user;
        }

      this.fireAuth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider()).then(success => {
        console.log('success in google login', success.user.displayName);
        this.navCtrl.navigateBack('home');
        this.Alert.Signin();
        this.isGoogleLogin = true;
        this.user =  success.user;
        console.log(this.user);
      }).catch(err => {
        console.log(err.message, 'error in google login');
      });
    }
  }

  onLoginSuccess(accessToken, accessSecret) {
    const credential = accessSecret ? firebase.default.auth.GoogleAuthProvider
      .credential(accessToken, accessSecret) : firebase.default.auth.GoogleAuthProvider
        .credential(accessToken);
    this.fireAuth.signInWithCredential(credential)
      .then((success) => {
        alert('successfully');
        this.isGoogleLogin = true;
        this.user = success.user;
        this.loading.dismiss();
      });

  }
  onLoginError(err) {
    console.log(err);
  }
  logout() {
    this.fireAuth.signOut().then(() => {
      this.isGoogleLogin = false;
    });
  }

}
