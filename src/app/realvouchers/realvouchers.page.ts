import { DonemodalPage } from '../modals/donemodal/donemodal.page';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-realvouchers',
  templateUrl: './realvouchers.page.html',
  styleUrls: ['./realvouchers.page.scss'],
})
export class RealvouchersPage implements OnInit {
  category: any = 's2';
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  segmentChanged(ev: any) {
    this.category = ev.detail.value;
    console.log(this.category);
  }

  async showModal() {
    const modal = await this.modalCtrl.create({
      component: DonemodalPage,
      backdropDismiss: true
    });

    return await modal.present();
  }



}
