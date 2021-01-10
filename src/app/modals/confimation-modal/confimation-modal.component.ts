import { Component, OnInit } from '@angular/core';

import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { ModalController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-confimation-modal',
  templateUrl: './confimation-modal.component.html',
  styleUrls: ['./confimation-modal.component.scss'],
})
export class ConfimationModalComponent implements OnInit {
  item: any;
  index: number;
  constructor(
    private photoViewer: PhotoViewer,
    private fService: FirebaseService,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    console.log('item ', this.item);
    console.log('index ', this.index);
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
        this.close();
      });

  }

  onDecline(item) {
    const data = {
      ...item,
      confirmation: false,
      verify: true
    };
    console.log('dataaa ', data)

    this.fService.UpdateOrderReserve(item.orderId, data)
      .then(res => {
        this.close();
      });

  }

  close() {
    this.modalCtrl.dismiss();
  }

}
