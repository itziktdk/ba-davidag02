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
      .subscribe((results: any) => {
        this.sentVoucherList = [];
        this.redeemedVoucherList = [];
        for (const result of results) {
          for (const owner of result.ownedPharmacy.owners) {
            if (owner.ownerId === localStorage.getItem('userId')) {
              this.voucherList.push(result);
              if (!result.redeemed && result.sent) {
                this.sentVoucherList.push(result);
              } else if (result.redeemed && result.sent) {
                this.redeemedVoucherList.push(result);
              }
            }
          }
        }
        // this.voucherList = results.filter(x => x.ownedPharmacy.owners.filter(y => y.ownerId == '7'));
        // this.sentVoucherList = this.voucherList.filter(x => x.redeemed == false && x.sent == true)
        // this.redeemedVoucherList = this.voucherList.filter(x => x.redeemed == true && x.sent == true)
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
        ownedPharmacy: null,
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
