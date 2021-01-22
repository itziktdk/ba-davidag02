import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { FirebaseService } from '../services/firebase.service';

import * as Moment from 'moment';

@Component({
  selector: 'app-coupon-popover',
  templateUrl: './coupon-popover.component.html',
  styleUrls: ['./coupon-popover.component.scss'],
})


export class CouponPopoverComponent implements OnInit {
  pharmacyList;
  setVisible;
  couponCode: string;
  pharmacy: any;

  errorMessage: string = null;

  constructor(
    public popoverController: PopoverController,
    private fService: FirebaseService
  ) { }

  ngOnInit() {
  }

  close() {
    this.popoverController.dismiss(this.pharmacy);
  }

  onSubmit() {
    this.fService.getUserVoucher(localStorage.getItem('userId'))
      .subscribe((res: any) => {
        const lastRedeemDttm = Moment(res.lastredeem);
        const currentDttm = Moment();
        const diff = currentDttm.diff(lastRedeemDttm, 'days');
        if ((!res.lastredeem || (res.lastredeem && diff >= 30))) {
          const selectedPharmacyList = this.pharmacyList.filter(x =>
            (x.phone.includes('-') ? x.phone.replace('-', '') : x.phone) === this.couponCode ||
            (x.phone2.includes('-') ? x.phone2.replace('-', '') : x.phone2) === this.couponCode);
          if (!selectedPharmacyList || (selectedPharmacyList && selectedPharmacyList.length === 0)) {
            this.errorMessage = 'Invalid  Coupon code';
          } else {
            // Skip duplicating
            for (const i of selectedPharmacyList.keys()) {
              if (this.pharmacyList.indexOf(selectedPharmacyList[i].phone) === -1) {
                this.pharmacy = selectedPharmacyList[i];
              } else if (this.pharmacyList.indexOf(selectedPharmacyList[i].phone1) === -1) {
                this.pharmacy = selectedPharmacyList[i];
              } else {
              }
            }
            this.close();
          }
        } else {
          this.errorMessage = `You have to wait ${30 - diff} more days to redeem a new voucher!`;
        }
      });



  }

}
