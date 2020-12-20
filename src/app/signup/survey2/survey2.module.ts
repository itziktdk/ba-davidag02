import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Survey2PageRoutingModule } from './survey2-routing.module';

import { Survey2Page } from './survey2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Survey2PageRoutingModule
  ],
  declarations: [Survey2Page]
})
export class Survey2PageModule {}
