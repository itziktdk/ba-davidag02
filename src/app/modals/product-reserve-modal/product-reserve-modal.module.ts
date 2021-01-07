import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductReserveModalPageRoutingModule } from './product-reserve-modal-routing.module';

import { ProductReserveModalPage } from './product-reserve-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductReserveModalPageRoutingModule
  ],
  declarations: [ProductReserveModalPage]
})
export class ProductReserveModalPageModule {}
