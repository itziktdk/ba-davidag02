import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealvouchersPageRoutingModule } from './realvouchers-routing.module';

import { RealvouchersPage } from './realvouchers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealvouchersPageRoutingModule
  ],
  declarations: [RealvouchersPage]
})
export class RealvouchersPageModule {}
