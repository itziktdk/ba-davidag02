import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OurproductsPageRoutingModule } from './ourproducts-routing.module';

import { OurproductsPage } from './ourproducts.page';
import { CheckstringPipe } from '../checkstring.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OurproductsPageRoutingModule
  ],
  declarations: [OurproductsPage,CheckstringPipe]
})
export class OurproductsPageModule {}
