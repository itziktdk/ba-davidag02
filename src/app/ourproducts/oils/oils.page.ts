import { Component, OnInit } from '@angular/core';
import { ProductmodalPage } from '../../modals/productmodal/productmodal.page';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-oils',
  templateUrl: './oils.page.html',
  styleUrls: ['./oils.page.scss'],
})
export class OilsPage implements OnInit {

  constructor(private navCtrl: NavController, private modalCtrl: ModalController) { }

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

}
