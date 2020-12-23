import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { PopoverController } from '@ionic/angular';
import { Popover1Component } from '../modals/popover1/popover1.component';

interface Vaoucer {
  serial: string;
  description: string;
  quantity: number;
}

@Component({
  selector: 'app-vaucher',
  templateUrl: './vaucher.page.html',
  styleUrls: ['./vaucher.page.scss'],
})

export class VaucherPage implements OnInit {

products: Observable<Vaoucer[]>;
productsCollectionRef: AngularFirestoreCollection<Vaoucer>;

constructor(private navCtrl: NavController, public afAuth: AngularFireAuth, afs: AngularFirestore,
            public popoverController: PopoverController) {

    this.afAuth.auth.signInAnonymously();
    this.productsCollectionRef = afs.collection('products');
    this.products = this.productsCollectionRef.valueChanges();

   }

   async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: Popover1Component,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
ngOnInit() {
  }


goHome()
{
    this.navCtrl.navigateBack('home');
  }

        createProduct(serial: string, description: string, quantity: number) {

        this.productsCollectionRef.add({ serial, description, quantity });

      }
}


