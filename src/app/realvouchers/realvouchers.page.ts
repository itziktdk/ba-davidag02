import { DonemodalPage } from '../modals/donemodal/donemodal.page';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

import * as Moment from 'moment';

@Component({
  selector: 'app-realvouchers',
  templateUrl: './realvouchers.page.html',
  styleUrls: ['./realvouchers.page.scss'],
})
export class RealvouchersPage implements OnInit {
  category: any = 's2';
  voucherList: Array<any> = [];
  sentVoucherList: Array<any> = [];
  redeemedVoucherList: Array<any> = [];
  constructor(
    private modalCtrl: ModalController,
    private fService: FirebaseService) { }

  ngOnInit() {
    this.performGetVouchers();
  }

  performGetVouchers() {
    this.fService.getAllerVoucher()
      .subscribe((result: any) => {
        this.voucherList = result;
        console.log('voucherList ', this.voucherList);
        this.sentVoucherList = this.voucherList.filter(x => x.redeemed == false && x.sent == true)
        this.redeemedVoucherList = this.voucherList.filter(x => x.redeemed == true && x.sent == true)
        console.log('sentVoucherList ', this.sentVoucherList);
        console.log('redeemedVoucherList ', this.redeemedVoucherList);
      });
  }

  segmentChanged(ev: any) {
    this.category = ev.detail.value;
    console.log(this.category);
  }

  approveVoucher(status: boolean, voucher: any) {
    if (status) {
      const updateData = {
        ...voucher,
        oldLastRedeemDttm: voucher.lastredeem,
        lastredeem: Moment().format(),
        redeemed: true,
      };
      this.fService.addVoucher(voucher.userData.userId, updateData).then(() => {
        this.showModal();
      });
    } else {
      const updateData = {
        ...voucher,
        OwnedPharmacy: null,
        redeemed: false,
        sent: false
      };
      this.fService.addVoucher(voucher.userData.userId, updateData);
    }
  }

  async showModal() {
    const modal = await this.modalCtrl.create({
      component: DonemodalPage,
      backdropDismiss: true
    });

    return await modal.present();
  }



}
