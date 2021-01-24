import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertController, ModalController, PopoverController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ReserverPopoverComponent } from '../../reserver-popover/reserver-popover.component';

@Component({
  selector: 'app-product-reserve-modal',
  templateUrl: './product-reserve-modal.page.html',
  styleUrls: ['./product-reserve-modal.page.scss'],
})
export class ProductReserveModalPage implements OnInit, OnDestroy {
  data;
  pArray;
  pCount: number;
  count = 0;
  orderItemArr: any = [];
  hideBtn = true;
  products: any;
  alert2: any = null;
  alert1: any = null;
  getAll: any;
  currentU: any;

  constructor(
    private modalCtrl: ModalController,
    private authService: AuthService,
    private fService: FirebaseService,
    private alertController: AlertController,
    private alertService: AlertService,
    public popoverController: PopoverController,
  ) { }

  ngOnInit() {
    this.pCount = Number(sessionStorage.getItem('rCount'));
    this.performGetAllProducts();
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: ReserverPopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
      mode: 'ios'
    });
    return await popover.present();
  }

  close() {
    this.modalCtrl.dismiss();
    this.getAll.unsubscribe();
    this.currentU.unsubscribe();
  }

  performGetAllProducts() {
    this.getAll = this.fService.getProducts()
      .subscribe((result: any) => {
        this.pArray.inventory = result;
        this.data = (this.pArray);
        console.log(this.data);
        this.products = result;
      });
  }

  onReserve() {
    this.hideBtn = true;
    if (this.orderItemArr && this.orderItemArr.length > 0) {
      this.currentU = this.authService.getCurrentUserDetails()
        .subscribe((result: any) => {
          // this.doctorList = result;
          console.log('snap ', result);
          // const data = {
          //   product: item,
          //   user: result,
          //   pharmacyDetails: this.data
          // };
          const length = this.orderItemArr.length;
          for (let index = 0; index < length; index++) {
            const item = this.orderItemArr[index];
            const data = {
              time: (new Date()).toString(),
              product: item,
              verify: false,
              user: {
                result,
                uid: localStorage.getItem('userId')
              },
              pharmacyDetails: this.pArray
            };
            const reserveId: string = this.generateReserveId;
            this.fService.addReserveOrders(data, reserveId)
              .then(res => {
                const notification = {
                  type: 'order',
                  dttm: (new Date()).toString(),
                  orderDetails: data,
                  seen: false,
                  show: true

                };
                this.fService.addReserveOrderNotification(notification)
                  .then();
                // this.fService.addUserReserveOrders(data)
                //   .then(response => {
                console.log(res);
                // });
              });
            this.alert();
            this.data = this.pArray;
            this.hideBtn = false;
          }
        });
    } else {
      this.alertService.default('', 'כמות לא תקינה');
      this.hideBtn = false;
    }
  }

  get generateReserveId() {
    const docId = ++this.pCount;
    const digitCount = docId.toString().length;
    switch (digitCount) {
      case 1:
        return '00000' + docId.toString();
        break;
      case 2:
        return '0000' + docId.toString();
        break;
      case 3:
        return '000' + docId.toString();
        break;
      case 4:
        return '00' + docId.toString();
        break;
      case 5:
        return '0' + docId.toString();
        break;
      case 6:
        return docId.toString();
        break;
    }

  }

  validateQty(qty) {
    if (qty === '' || qty === 0) {
      return true;
    } else if (qty) {
      return true;
    }
    return false;
  }

  onPlus(index) {
    let itemCount = this.data.inventory[index].orderedQty;
    if (this.data.inventory && this.data.inventory[index] &&
      // tslint:disable-next-line:no-bitwise
      (this.data.inventory[index].orderedQty ||
        this.data.inventory[index].orderedQty === '' ||
        this.data.inventory[index].orderedQty === 0)) {
      if (itemCount === 0) {
        this.data.inventory[index].orderedQty = ++itemCount;
      } else if (itemCount === '') {
        this.data.inventory[index].orderedQty = 0;
      } else {
        this.data.inventory[index].orderedQty = ++itemCount;
      }
    } else {
      let tempItem;
      tempItem = {
        ...this.data.inventory[index],
        orderedQty: this.count + 1
      };
      this.data.inventory[index] = tempItem;
    }
  }

  onMinus(index) {
    let itemCount = this.data.inventory[index].orderedQty;
    if (this.data.inventory && this.data.inventory[index] &&
      // tslint:disable-next-line:no-bitwise
      (this.data.inventory[index].orderedQty ||
        this.data.inventory[index].orderedQty === '' ||
        this.data.inventory[index].orderedQty === 0)) {
      if (itemCount === 0) {
        return;
      } else if (itemCount === '') {
        this.data.inventory[index].orderedQty = 0;
      } else {
        this.data.inventory[index].orderedQty = --itemCount;
      }
    } else {
      let tempItem;
      tempItem = {
        ...this.data.inventory[index],
        orderedQty: this.count - 1
      };
      this.data.inventory[index] = tempItem;
    }
  }

  onManuallyAdd(index, event) {
    console.log(event);
    if (this.data.inventory && this.data.inventory[index] && this.data.inventory[index].orderedQty) {
      if (event.target.value === '') {
        this.data.inventory[index].orderedQty = event.target.value;
      } else {
        this.data.inventory[index].orderedQty = Number(event.target.value);
      }
    } else if (this.data.inventory && this.data.inventory[index] && this.data.inventory[index].orderedQty === '') {
      this.data.inventory[index].orderedQty = Number(event.target.value);
    } else {
      if (event.target.value === '') {
        this.data.inventory[index].orderedQty = event.target.value;
      } else {
        let tempItem;
        tempItem = {
          ...this.data.inventory[index],
          orderedQty: Number(event.target.value)
        };
        this.data.inventory[index] = tempItem;
      }
    }
  }

  onOderItem(item, i) {
    console.log('avail ', !!item.orderedQty);
    if (item.orderedQty && item.orderedQty > 0) {
      this.addDisableStatus(i);


      this.orderItemArr.push(item);
      this.hideBtn = false;
      this.data.inventory[i].isDisabled = 1;
      this.alertService.default('', 'המוצר התווסף בהצלחה! :)');
    } else {
      this.alertReset(i);
    }
  }

  addDisableStatus(index?: any) {
    if (index >= 0 || index) {
      for (let i = 0; i < this.data.inventory.length; i++) {
        if (i === index) {
          this.data.inventory[i].isDisable = false;
        } else {
          this.data.inventory[i].isDisable = true;
        }
      }
    } else {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.data.inventory.length; i++) {
        this.data.inventory[i].isDisable = undefined;
      }
    }

  }

  async alert() {
    this.alert1 = await this.alertController.create({
      message: 'בקשת ההזמנה נשלחה בהצלחה להנהלת בית המרקחת, נא עקוב אחרי איזור ההתראות בנוגע לאישור ההזמנה. בריאות שלמה!',
      backdropDismiss: false,
      buttons: [
        {
          text: 'סגור',
          cssClass: 'secondary',
          handler: (blah) => {
            this.close();
            console.log('Confirm Cancel: blah');
          }
        }
      ]
    });
    await this.alert1.present();
  }


  async alertReset(index) {
    this.alert2 = await this.alertController.create({
      message: 'Please add a valid Quantity',
      backdropDismiss: false,
      buttons: [
        {
          text: 'OK',
          cssClass: 'secondary',
          handler: (blah) => {
            this.data.inventory[index] = this.pArray.inventory[index];
            console.log('Confirm Cancel item: blah');
          }
        }
      ]
    });
    await this.alert2.present();
  }

  ngOnDestroy() {
    if (this.alert1 != null) {
      this.alert1.dismiss();
    }
    if (this.alert2 != null) {
      this.alert2.dismiss();
    }
  }
}
