import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonemodalPageRoutingModule } from './donemodal-routing.module';

import { DonemodalPage } from './donemodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonemodalPageRoutingModule
  ],
  declarations: [DonemodalPage]
})
export class DonemodalPageModule {}
