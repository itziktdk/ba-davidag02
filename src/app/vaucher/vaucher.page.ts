
import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { CouponPopoverComponent } from '../coupon-popover/coupon-popover.component';
import { FirebaseService } from '../services/firebase.service';

import * as Moment from 'moment';

@Component({
  selector: 'app-vaucher',
  templateUrl: './vaucher.page.html',
  styleUrls: ['./vaucher.page.scss'],
})
export class VaucherPage implements OnInit {

  s1 = true;
  showBadge = true;
  filteredList: Array<any>;
  pharmacyList: Array<any>;
  pharmacy: any;
  userVoucherDetails: Array<any> = [];

  showDetails = false;
  constructor(
    private navCtrl: NavController,
    public popoverController: PopoverController,
    private fService: FirebaseService
  ) { }

  ngOnInit() {
    this.performGetUserVoucher();
  }

  performGetUserVoucher() {
    this.fService.getUserVoucher(localStorage.getItem('userId'))
      .subscribe((res: any) => {
        if (res.sent && !res.redeemed) {
          this.showDetails = true;
          this.s1 = false;
          this.showBadge = true;
          this.pharmacy = res.ownedPharmacy;
        } else {
          this.performGetAllPharmacies();
          this.fService.getUserVoucher(localStorage.getItem('userId'))
            .subscribe((userVoucher: any) => {
              this.userVoucherDetails.push(userVoucher);
            });
        }
      });
  }

  performGetAllPharmacies() {
    this.fService.getPharmacyList()
      .subscribe((result: any) => {
        this.pharmacyList = result;
      });
  }

  goHome() {
    this.navCtrl.navigateBack('home');
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: CouponPopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
      mode: 'ios',
      componentProps: {
        setVisible: true,
        pharmacyList: this.pharmacyList
      }
    });

    popover.onDidDismiss().then((tdata) => {
      if (tdata.data) {
        this.showDetails = true;
        this.s1 = false;
        this.showBadge = false;
        this.pharmacy = tdata.data;
        const ownedPharmacy = { ...tdata.data };
        const updateData = {
          ...this.userVoucherDetails[0],
          ownedPharmacy,
          oldLastRedeemDttm: this.userVoucherDetails[0].lastredeem,
          sent: true
        };
        console.log(this.pharmacy)
        this.fService.addVoucher(localStorage.getItem('userId'), updateData);

        const notification = {
          dttm: (new Date()).toString(),
          voucherDetails: updateData,
          seen: false,
          show: true
        };
        this.fService.addReserveOrderNotification(notification)
          .then();

      } else {
        this.s1 = true;
      }
    });
    return await popover.present();
  }

  setBack() {
    this.s1 = true;
    this.showBadge = true;

    const updateData = {
      ...this.userVoucherDetails[0],
      // lastredeem: this.userVoucherDetails[0].oldLastRedeemDttm ? this.userVoucherDetails[0].oldLastRedeemDttm : null,
      ownedPharmacy: null,
      redeemed: false,
      sent: false
    };
    this.fService.addVoucher(localStorage.getItem('userId'), updateData);
  }

}
