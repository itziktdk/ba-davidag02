import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmmodalPageRoutingModule } from './confirmmodal-routing.module';

import { ConfirmmodalPage } from './confirmmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmmodalPageRoutingModule
  ],
  declarations: [ConfirmmodalPage]
})
export class ConfirmmodalPageModule {}
