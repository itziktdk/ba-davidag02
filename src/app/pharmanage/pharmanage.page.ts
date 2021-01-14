import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pharmanage',
  templateUrl: './pharmanage.page.html',
  styleUrls: ['./pharmanage.page.scss'],
})
export class PharmanagePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goVoucher()
  {
    this.navCtrl.navigateForward('realvouchers');
  }

  goTracking()
  {
    this.navCtrl.navigateForward('ordertracking');
  }

  goProfile()
  {
    this.navCtrl.navigateForward('pharmprofile');
  }

  goHome() {
    this.navCtrl.navigateForward('home');
  }
}
