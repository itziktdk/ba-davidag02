import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OilsPageRoutingModule } from './oils-routing.module';

import { OilsPage } from './oils.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OilsPageRoutingModule
  ],
  declarations: [OilsPage]
})
export class OilsPageModule {}
