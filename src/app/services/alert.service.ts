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

      header: 'שגיאה',
      message: 'כתובת הדואר האלקטרוני לא נמצאה',
      buttons: ['סגור']
    });

    await alert.present();
  }
  async email() {
    const alert = await this.alertController.create({
      header:  'אופס!',
      message: 'כתובת הדואר האלקטרוני אינה תקינה',
      buttons: ['ok']
    });
    await alert.present();
  }

  async Signin() {
    const alert = await this.alertController.create({
      header: 'ברוך הבא!',
      message: 'נכנסת בהצלחה :)',
      buttons: ['סגירה'],
      cssClass: 'Alert'
    });
    await alert.present();
  }


  constructor(private alertController: AlertController) { }
}
