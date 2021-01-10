import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
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
  pArray;
  count = 0;
  orderItemArr: any = [];
  hideBtn = true;

  constructor(
    private modalCtrl: ModalController,
    private authService: AuthService,
    private fService: FirebaseService,
    private alertController: AlertController,
    private alertService: AlertService,
  ) { }

  ngOnInit() {
    // console.log('data ', this.data);
    // this.data = this.pArray;
    this.performGetAllProducts();
  }

  close() {
    this.modalCtrl.dismiss();
  }

  performGetAllProducts() {
    this.fService.getProducts()
      .subscribe((result: any) => {
        this.pArray.inventory = result;
        this.data = this.pArray;
      });
  }

  onReserve() {
    this.hideBtn = true;
    if (this.orderItemArr && this.orderItemArr.length > 0) {
      this.authService.getCurrentUserDetails()
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
              product: item,
              verify: false,
              user: {
                ...result,
                uid: localStorage.getItem('userId')
              },
              pharmacyDetails: this.pArray
            };
            this.fService.addReserveOrders(data)
              .then(res => {
                // this.fService.addUserReserveOrders(data)
                //   .then(response => {
                console.log(res);
                // });
              });
          }
          this.alert();
          this.data = this.pArray;
          this.hideBtn = false;
        });
    } else {
      this.alertService.default('', 'Please add atleast one item to process!');
      this.hideBtn = false;
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
    console.log('avail ', !!item.orderedQty)
    if (item.orderedQty && item.orderedQty > 0) {
      this.addDisableStatus(i);


      this.orderItemArr.push(item);
      this.hideBtn = false;
      this.data.inventory[i].isDisabled = 1;
      this.alertService.default('', 'Your item has added successfully!');
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
  async alertReset(index) {
    const alert = await this.alertController.create({
      message: 'Please add a valid Quantity',
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
    await alert.present();
  }
}
