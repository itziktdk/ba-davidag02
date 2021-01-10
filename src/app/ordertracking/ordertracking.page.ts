import { ModalController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { ConfimationModalComponent } from '../modals/confimation-modal/confimation-modal.component';

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
        console.log('this.order ', orders);
        const result = orders.forEach(order => {
          // if (order.pharmacyDetails.ownerId == userId) {
            this.reserveList.push(order);
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
    console.log('send item ', item)
    const modal = await this.modalCtrl.create({
      component: ConfimationModalComponent,
      backdropDismiss: true,
      componentProps: {
        item,
        index
      }
    });

    this.modalCtrl.dismiss(() => {
      // this.performGetOrderList();
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
