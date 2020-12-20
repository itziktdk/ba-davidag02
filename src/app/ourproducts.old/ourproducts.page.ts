import { ProductmodalPage } from './../modals/productmodal/productmodal.page';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, IonNav } from '@ionic/angular';
import { ModalPagePage } from '../modals/ModalPage/ModalPage.page';
import {ViewChild} from '@angular/core';


@Component({
  selector: 'app-ourproducts',
  templateUrl: './ourproducts.page.html',
  styleUrls: ['./ourproducts.page.scss'],
})
export class OurproductsPage implements OnInit {

  constructor(private navCtrl: NavController, private modalCtrl: ModalController, public modalController: ModalController) { }


  ngOnInit() {

  }


  goHome()
  {
    this.navCtrl.navigateBack('home');
  }

  async showModal() {
    const modal = await this.modalCtrl.create({
      component: ProductmodalPage,
      backdropDismiss: true
    });

    return await modal.present();
  }

  async presentModal(ProdRecords: any, description: any, img: any, premium: any, category: any) {
    const modal = await this.modalController.create({
      component: ModalPagePage,
      cssClass: 'fullscreen',
      componentProps: {
        ProdRecords,
        description,
        img,
        premium,
        category
      }
    });
    return await modal.present();
  }
}


