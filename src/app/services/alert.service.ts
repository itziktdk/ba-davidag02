import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  async Invalid() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message: 'This Email Doesn\'t Exist',
      buttons: ['OK']
    });

    await alert.present();
  }
  async email() {
    const alert = await this.alertController.create({
      header: 'Wooow',
      subHeader: 'Oops!',
      message: 'Invalid Email',
      buttons: ['ok']
    });
    await alert.present();
  }

  async Signin() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'User Sign In',
      buttons: ['ok']
    });
    await alert.present();
  }

  async default(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['ok']
    });
    await alert.present();
  }








  constructor(private alertController: AlertController) { }
}
