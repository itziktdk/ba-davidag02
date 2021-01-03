import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
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
    private authService: AuthService) { }

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

}
