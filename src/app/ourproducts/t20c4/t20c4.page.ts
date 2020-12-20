import { Component, OnInit } from '@angular/core';
import { ProductmodalPage } from '../../modals/productmodal/productmodal.page';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-t20c4',
  templateUrl: './t20c4.page.html',
  styleUrls: ['./t20c4.page.scss'],
})
export class T20c4Page implements OnInit {

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
