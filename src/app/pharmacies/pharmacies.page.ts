import { PharmodalPage } from './../modals/pharmodal/pharmodal.page';
// import { Component, OnInit } from '@angular/core';
import { OnInit, Component, Pipe, NgModule, VERSION } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ActivatedRoute } from '@angular/router';
import { ProductReserveModalPage } from '../modals/product-reserve-modal/product-reserve-modal.page';
// const sendmail = require('sendmail')();
@Component({
  selector: 'app-pharmacies',
  templateUrl: './pharmacies.page.html',
  styleUrls: ['./pharmacies.page.scss'],
})
export class PharmaciesPage implements OnInit {
  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private launchNavigator: LaunchNavigator,
    private route: ActivatedRoute) { }
  filterTerm: string;
  category: any = 's1';

  pharmRecords;
  ngOnInit() {
    console.log('hit');
    this.route.queryParams.subscribe(params => {
      this.pharmRecords = JSON.parse(params.data);
      console.log(this.pharmRecords);
    });
  }

  segmentChanged(ev: any) {
    this.category = ev.detail.value;
    console.log(this.category);
  }

  async showModal(data: any) {
    const modal = await this.modalCtrl.create({
      component: PharmodalPage,
      backdropDismiss: true,
      componentProps: data
    });

    return await modal.present();
  }

  goHome() {
    this.navCtrl.navigateBack('home');
  }

  goNavigate() {
    const OPTS: LaunchNavigatorOptions = {
      start: 'אשתאול 4 חולון',
      app: this.launchNavigator.APP.WAZE
    };

    this.launchNavigator.navigate('אלנבי 80 תל אביב', OPTS)
      .then(
        success => console.log('Launched navigator'),
        error => console.log('Error launching navigator', error)
      );
  }

  async onReserveProduct(data: any) {
    const modal = await this.modalCtrl.create({
      component: ProductReserveModalPage,
      backdropDismiss: true,
      componentProps: {
        data
      }
    });

    return await modal.present();
  }
}



