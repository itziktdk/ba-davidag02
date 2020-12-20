import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonNav, NavController } from '@ionic/angular';
import { OurproductsPageRoutingModule } from './ourproducts-routing.module';
import { OurproductsPage } from './ourproducts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OurproductsPageRoutingModule
  ],
  declarations: [OurproductsPage]
})
export class OurproductsPageModule {}
