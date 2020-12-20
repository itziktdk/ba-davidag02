import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductmodalPageRoutingModule } from './productmodal-routing.module';

import { ProductmodalPage } from './productmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductmodalPageRoutingModule
  ],
  declarations: [ProductmodalPage]
})
export class ProductmodalPageModule {}
