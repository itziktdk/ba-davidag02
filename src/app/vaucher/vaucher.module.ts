import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VaucherPageRoutingModule } from './vaucher-routing.module';

import { VaucherPage } from './vaucher.page';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {firebaseConfig} from '../firebase.config';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VaucherPageRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  declarations: [VaucherPage]
})
export class VaucherPageModule {}
