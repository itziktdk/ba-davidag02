import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PharmodalPageRoutingModule } from './pharmodal-routing.module';

import { PharmodalPage } from './pharmodal.page';
import { IonicRatingComponentModule } from 'ionic-rating-component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicRatingComponentModule,
    PharmodalPageRoutingModule
  ],
  declarations: [PharmodalPage]
})
export class PharmodalPageModule {}
