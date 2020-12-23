import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  constructor(private navCtrl: NavController, public actionSheetController: ActionSheetController) {}

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
    scrollbar: false
   };

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'ניווט מהיר',
      cssClass: 'Alert',
      buttons: [{
        text: 'T20/C4',
        role: 'destructive',
        icon: 'color-filter-outline',
        handler: () => {
          console.log('Delete clicked');
          this.navCtrl.navigateForward('/ourproducts?category=%7B"categoryImage":"assets%2Fimgs%2Fcc1.png","categoryName":"תפרחות","categoryKind":"T20%2FC4"%7D', );

        }
      }, {
        text: 'T15/C3',
        icon: 'color-filter-outline',
        handler: () => {
          console.log('Share clicked');
          this.navCtrl.navigateForward('/ourproducts?category=%7B"categoryImage":"assets%2Fimgs%2Fcc1.png","categoryName":"תפרחות","categoryKind":"T15%2FC3"%7D', );
        }
      }, {
        text: 'שמני קנאביס',
        icon: 'color-fill-outline',
        handler: () => {
          console.log('Play clicked');
          this.navCtrl.navigateForward('/ourproducts?category=%7B"categoryImage":"assets%2Fimgs%2Fcc1.png","categoryName":"שמן","categoryKind":"קנאביס"%7D', );

        }
      }, {
        text: 'סגור',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  goPharmacies()
  {
    this.navCtrl.navigateForward('pharmacies');
  }

  goDoctors()
  {
    this.navCtrl.navigateForward('doctors');
  }

  goProducts()
  {
    this.navCtrl.navigateForward('productcategories');
  }

  goLicense()
  {
    this.navCtrl.navigateForward('license');
  }

  goLogin()
  {
    this.navCtrl.navigateForward('login');
  }

  goVaucher()
  {
    this.navCtrl.navigateForward('vaucher');
  }
  goMange()
  {
    this.navCtrl.navigateForward('pharmanage');
  }
  goNews()
  {
    this.navCtrl.navigateForward('news');
  }
}
