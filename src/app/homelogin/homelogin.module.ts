import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomeloginPage } from './homelogin.page';

import { HomeloginPageRoutingModule } from './homelogin-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeloginPageRoutingModule
  ],
  declarations: [HomeloginPage]
})
export class HomeloginPageModule {}
