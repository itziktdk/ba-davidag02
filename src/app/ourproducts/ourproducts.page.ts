import { ProductmodalPage } from './../modals/productmodal/productmodal.page';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ourproducts',
  templateUrl: './ourproducts.page.html',
  styleUrls: ['./ourproducts.page.scss'],
})
export class OurproductsPage implements OnInit {

  category: any;

  ourProducts = [
    {
      productName: 'שמשון INDICA T15/C3',
      desc: 'שמשון INDICA T15/C3 תפרחת אינדיקה ברמת פרימיום',
      series: 'PREMIUM'
    },
    {
      productName: 'דלילה SATIVA THC RICH T15/C3',
      desc: 'תפרחת סאטיבה דלילה SATIVA THC RICH T15/C3',
      series: 'PREMIUM'
    },
    {
      productName: 'יהב INDICA T20/C4',
      desc: 'יהב INDICA T20/C4',
      series: 'PREMIUM'
    },
    {
      productName: 'יהונתן SATIVA THC RICH T20/C4',
      desc: 'יהונתן SATIVA THC RICH T20/C4',
      series: 'PREMIUM'
    },
    {
      productName: 'דויד BLEND T20/C4',
      desc: 'דויד BLEND T20/C4',
      series: 'SUPER PREMIUM'
    },
    {
      productName: 'גולית INDICA T20/C4',
      desc: 'גולית INDICA T20/C4',
      series: 'SUPER PREMIUM'
    },
    {
      productName: 'שמן קנאביס T1/C20',
      desc: 'שמן קנאביס T1/C20',
      series: 'PREMIUM'
    },
    {
      productName: 'שמן  קנאביס T10/C2',
      desc: 'שמן  קנאביס T10/C2',
      series: 'PREMIUM'
    },
  ];
  constructor(private navCtrl: NavController, private modalCtrl: ModalController,
              public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(previousPageResponse => {
      this.category = previousPageResponse.category;
      this.category = JSON.parse(this.category);
      console.log((this.category));
    });
  }


  goHome()
  {
    this.navCtrl.navigateBack('home');
  }
  goProductsoils()
  {
    this.navCtrl.navigateBack('oils');
  }
  async showModal(productName: any, desc: any, series: any ) {
    const modal = await this.modalCtrl.create({
      component: ProductmodalPage,
      backdropDismiss: true,
      componentProps: {
        productName,
        desc,
        series
      }
    });

    return await modal.present();
  }



}
