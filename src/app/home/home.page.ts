import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticationService) { }

  ngOnInit() {
    this.authService.authStatus()
      .subscribe(res => {
        console.log(res);
      });
  }

  goPharmacies() {
    this.navCtrl.navigateForward('pharmacies');
  }

  goDoctors() {
    this.navCtrl.navigateForward('doctors');
  }

  goProducts() {
    this.navCtrl.navigateForward('productcategories');
  }

  goLicense() {
    this.navCtrl.navigateForward('license');
  }

  goLogin() {
    this.navCtrl.navigateForward('login');
  }

  goMange() {
    this.navCtrl.navigateForward('pharmanage');
  }
  goNews() {
    this.navCtrl.navigateForward('news');
  }
}
