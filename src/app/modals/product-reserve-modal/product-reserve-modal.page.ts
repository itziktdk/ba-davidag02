import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-product-reserve-modal',
  templateUrl: './product-reserve-modal.page.html',
  styleUrls: ['./product-reserve-modal.page.scss'],
})
export class ProductReserveModalPage implements OnInit {
  data;

  constructor(
    private modalCtrl: ModalController,
    private authService: AuthService,
    private fService: FirebaseService,
    private alertController: AlertController,
  ) { }

  ngOnInit() {
    console.log('data ', this.data);
  }

  close() {
    this.modalCtrl.dismiss();
  }

  onReserve(item: any) {
    this.authService.getCurrentUserDetails()
      .subscribe((result: any) => {
        // this.doctorList = result;
        console.log('snap ', result);
        const data = {
          product: item,
          user: result,
          pharmacyDetails: this.data
        };
        this.fService.addReserveOrders(data)
          .then(res => {
            console.log(res);
            this.alert();
          });
      });
  }


  async alert() {
    const alert = await this.alertController.create({
      message: 'The reserver request has been sent for Pharmacy approval. Please follow the notification area for update.',
      buttons: [
        {
          text: 'OK',
          cssClass: 'secondary',
          handler: (blah) => {
            this.close();
            console.log('Confirm Cancel: blah');
          }
        }
      ]
    });
    await alert.present();
  }
}
