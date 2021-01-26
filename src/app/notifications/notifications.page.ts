import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

// import * as Moment from 'moment';

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
      this.notificationList.forEach((notification: any) => {
        this.notificationList.sort((a, b) => {
          const c = new Date(b.dttm);
          const d = new Date(a.dttm);
          return c < d ? -1 : c > d ? 1 : 0;
          // const c = Moment(b.dttm);
          // const d = Moment(a.dttm);
          // return c.isBefore(d) ? -1 : c.isAfter(d) ? 1 : 0;
        });
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
