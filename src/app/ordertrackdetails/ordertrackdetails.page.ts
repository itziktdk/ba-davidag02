import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-ordertrackdetails',
  templateUrl: './ordertrackdetails.page.html',
  styleUrls: ['./ordertrackdetails.page.scss'],
})
export class OrdertrackdetailsPage implements OnInit {
  item: any;
  constructor(
    private fService: FirebaseService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
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
