
import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { CouponPopoverComponent } from '../coupon-popover/coupon-popover.component';

@Component({
  selector: 'app-vaucher',
  templateUrl: './vaucher.page.html',
  styleUrls: ['./vaucher.page.scss'],
})
export class VaucherPage implements OnInit {

  s1:boolean = true;
  showBadge:boolean = true;
  constructor(private navCtrl: NavController,  public popoverController: PopoverController) { }

  ngOnInit() {
  }


  goHome()
  {
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
        "setVisible": true,
      }
    });

    popover.onDidDismiss().then((tdata)=>{
      this.s1 = false;
      this.showBadge = false;
      console.log(this.s1);
    })
    return await popover.present();
  }

  setBack()
  {
    this.s1 = true;
  }

}
