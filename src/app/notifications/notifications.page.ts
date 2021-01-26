import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  notificationList: Array<any>;
  voucherList: Array<any> = [];
  orderList: Array<any> = [];
  constructor(
    private modalCtrl: ModalController,
    private fService: FirebaseService) { }

  ngOnInit() {
    if (this.notificationList && this.notificationList.length > 0) {
      this.notificationList.forEach(ele => {
        if (ele.type === 'voucher') {
          this.voucherList.push(ele);
        } else if (ele.type === 'order') {
          this.orderList.push(ele);
        }
      });
    }
  }

  close() {
    for (const notification of this.notificationList) {
      if (!notification.seen) {
        const updNotification = {
          ...notification,
          seen: true
        };
        this.fService.updateNotification(notification.id, updNotification)
          .then();
      }
    }
    this.modalCtrl.dismiss();
  }
}
