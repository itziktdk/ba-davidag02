import { Component, OnInit } from '@angular/core';

import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { ModalController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import * as moment from 'moment';
@Component({
  selector: 'app-confimation-modal',
  templateUrl: './confimation-modal.component.html',
  styleUrls: ['./confimation-modal.component.scss'],
})
export class ConfimationModalComponent implements OnInit {
  item: any;
  index: number;
  dttm: string;

  constructor(
    private photoViewer: PhotoViewer,
    private fService: FirebaseService,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    this.dttm = moment(this.item.time).format('LLL');

  }

  previewImg(img: string) {
    this.photoViewer.show(img);
  }

  onAccept(item) {
    const data = {
      ...item,
      confirmation: true,
      verify: true
    };
    this.fService.UpdateOrderReserve(item.orderId, data)
      .then(res => {
        const notification = {
          type: 'order',
          dttm: (new Date()).toString(),
          orderDetails: data,
          seen: false,
          show: true,
          uid: localStorage.getItem('userId')
        };
        this.fService.addReserveOrderNotification(notification)
          .then();
        this.close();
      });
  }

  onDecline(item) {
    const data = {
      ...item,
      confirmation: false,
      verify: true
    };
    this.fService.UpdateOrderReserve(item.orderId, data)
      .then(res => {
        this.close();
        location.reload();
      });
  }

  close() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
}
