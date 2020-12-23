import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdertrackingPageRoutingModule } from './ordertracking-routing.module';

import { OrdertrackingPage } from './ordertracking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdertrackingPageRoutingModule
  ],
  declarations: [OrdertrackingPage]
})
export class OrdertrackingPageModule {}
