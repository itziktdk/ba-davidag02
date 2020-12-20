import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.page.html',
  styleUrls: ['./login2.page.scss'],
})
export class Login2Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goRegister()
  {
    this.navCtrl.navigateForward('register1');
  }

}
