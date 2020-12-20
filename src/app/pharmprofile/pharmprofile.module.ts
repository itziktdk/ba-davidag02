import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PharmprofilePageRoutingModule } from './pharmprofile-routing.module';

import { PharmprofilePage } from './pharmprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PharmprofilePageRoutingModule
  ],
  declarations: [PharmprofilePage]
})
export class PharmprofilePageModule {}
