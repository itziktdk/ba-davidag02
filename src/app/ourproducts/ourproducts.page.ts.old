import { ProductmodalPage } from './../modals/productmodal/productmodal.page';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-ourproducts',
  templateUrl: './ourproducts.page.html',
  styleUrls: ['./ourproducts.page.scss'],
})
export class OurproductsPage implements OnInit {

  constructor(private navCtrl: NavController, private modalCtrl: ModalController) { }

  ngOnInit() {
  }


  goHome()
  {
    this.navCtrl.navigateBack('home');
  }
  goProductsoils()
  {
    this.navCtrl.navigateBack('oils');
  }
  async showModal() {
    const modal = await this.modalCtrl.create({
      component: ProductmodalPage,
      backdropDismiss: true
    });

    return await modal.present();
  }



}
