import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-productcategories',
  templateUrl: './productcategories.page.html',
  styleUrls: ['./productcategories.page.scss'],
})
export class ProductcategoriesPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

    
  goHome()
  {
    this.navCtrl.navigateBack('home');
  }

  goProducts()
  {
    this.navCtrl.navigateBack('ourproducts');
  }

  goProductsOils()
  {
    this.navCtrl.navigateBack('oils');
  }

  goProductst20()
  {
    this.navCtrl.navigateBack('t20c4');
  }
}
