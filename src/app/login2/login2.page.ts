import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AlertService } from '../services/alert.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.page.html',
  styleUrls: ['./login2.page.scss'],
})
export class Login2Page implements OnInit {
  email: string;
  password: any;
  constructor(
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    public alertService: AlertService) { }

  ngOnInit() {
    this.email = this.activatedRoute.snapshot.paramMap.get('email');
  }

  // goRegister() {
  //   this.navCtrl.navigateForward('home');
  // }

  login() {
    this.authService.login(this.email, this.password)
      .then(() => {
        // this.Alert.Signin();
        this.navCtrl.navigateForward('home');
      })
      .catch(err => {
        console.log('err ', err);
      });
  }

  openForgetPassword() {
    this.alertService.default('אנא בדוק את הדוא"ל שלך.', 'שכחת סיסמא');
    this.navCtrl.navigateBack('login');
  }

}
