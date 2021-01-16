import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-coupon-popover',
  templateUrl: './coupon-popover.component.html',
  styleUrls: ['./coupon-popover.component.scss'],
})


export class CouponPopoverComponent implements OnInit {

  constructor( public popoverController: PopoverController) { }

  ngOnInit() {}

  close()
  {
    this.popoverController.dismiss();
  }

}
