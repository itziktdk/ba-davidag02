import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) {}


  goPharmacies()
  {
    this.navCtrl.navigateForward('pharmacies');
  }

  goDoctors()
  {
    this.navCtrl.navigateForward('doctors');
  }

  goProducts()
  {
    this.navCtrl.navigateForward('productcategories');
  }

  goLicense()
  {
    this.navCtrl.navigateForward('license');
  }

  goLogin()
  {
    this.navCtrl.navigateForward('login');
  }

  goMange()
  {
    this.navCtrl.navigateForward('pharmanage');
  }
  goNews()
  {
    this.navCtrl.navigateForward('news');
  }
}
