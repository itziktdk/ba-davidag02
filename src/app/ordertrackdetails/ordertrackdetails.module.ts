import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdertrackdetailsPageRoutingModule } from './ordertrackdetails-routing.module';

import { OrdertrackdetailsPage } from './ordertrackdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdertrackdetailsPageRoutingModule
  ],
  declarations: [OrdertrackdetailsPage]
})
export class OrdertrackdetailsPageModule {}
