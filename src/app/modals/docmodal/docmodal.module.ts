import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocmodalPageRoutingModule } from './docmodal-routing.module';

import { DocmodalPage } from './docmodal.page';
import { IonicRatingComponentModule } from 'ionic-rating-component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocmodalPageRoutingModule,
    IonicRatingComponentModule
  ],
  declarations: [DocmodalPage]
})
export class DocmodalPageModule {}
