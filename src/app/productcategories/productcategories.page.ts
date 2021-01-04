import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-productcategories',
  templateUrl: './productcategories.page.html',
  styleUrls: ['./productcategories.page.scss'],
})
export class ProductcategoriesPage implements OnInit {

  productCategories = [
    {
      categoryImage: 'assets/imgs/cc1.png',
      categoryName: 'תפרחות',
      categoryKind: 'T15/C3',
    },
    {
      categoryImage: 'assets/imgs/cc1.png',
      categoryName: 'תפרחות',
      categoryKind: 'T20/C4',
    },
    {
      categoryImage: 'assets/imgs/cc2.png',
      categoryName: 'שמני',
      categoryKind: 'קנאביס',
    },

  ]

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

    
  goHome()
  {
    this.navCtrl.navigateBack('home');
  }

  goProducts(item)
  {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        category: JSON.stringify(item)
      }
    };//SENDING DATA TO NEXT PAGE 
    this.navCtrl.navigateForward(['/ourproducts'] , navigationExtras);
  }

  // goProductsOils()
  // {
  //   this.navCtrl.navigateBack('oils');
  // }

  // goProductst20()
  // {
  //   this.navCtrl.navigateBack('t20c4');
  // }
}
