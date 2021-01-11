import { ModalController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { ConfimationModalComponent } from '../modals/confimation-modal/confimation-modal.component';
import * as moment from 'moment';

@Component({
  selector: 'app-ordertracking',
  templateUrl: './ordertracking.page.html',
  styleUrls: ['./ordertracking.page.scss'],
})
export class OrdertrackingPage implements OnInit {

  category: any = 's2';
  reserveList: Array<any> = [];
  constructor(
    private navCtrl: NavController,
    private fService: FirebaseService,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    this.performGetOrderList();
  }

  performGetOrderList() {
    const userId = localStorage.getItem('userId');
    this.fService.getReserveOrders()
      .subscribe((orders: any) => {
        this.reserveList = [];
        console.log('this.order ', orders);
        orders.forEach(order => {
          // if (order.pharmacyDetails.ownerId == userId) {
          this.reserveList.push(order);
          this.reserveList.sort((a, b) => {
            const c = new Date(a.time);
            const d = new Date(b.time);
            return c < d ? -1 : c > d ? 1 : 0;
          });
          // }
          // console.log('this.reserveList ', this.reserveList);
        });
        // orders.
        // console.log('reserve orders ', result);
      });
  }

  segmentChanged(ev: any) {
    this.category = ev.detail.value;
    console.log(this.category);
  }


  goDetails() {
    this.navCtrl.navigateForward('ordertrackdetails');
  }

  async showModal(item, index) {
    console.log('send item ', item);
    const modal = await this.modalCtrl.create({
      component: ConfimationModalComponent,
      backdropDismiss: true,
      componentProps: {
        item,
        index
      }
    });

    this.modalCtrl.dismiss(() => {
      this.performGetOrderList();
    });
    return await modal.present();
  }

  onNavigate(city: string) {
    console.log('on nav');
    this.fService.goNavigate(city)
      .then(
        success => console.log('Launched navigator'),
        error => console.log('Error launching navigator', error)
      );
  }

  onCallDial(num) {
    this.fService.goCallDial(num)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }
}
