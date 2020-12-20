import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PharmaciesPageRoutingModule } from './pharmacies-routing.module';

import { PharmaciesPage } from './pharmacies.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PharmaciesPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [PharmaciesPage]
})
export class PharmaciesPageModule {}
