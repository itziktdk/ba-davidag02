import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { T20c4PageRoutingModule } from './T20c4-routing.module';

import { T20c4Page } from './t20c4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    T20c4PageRoutingModule
  ],
  declarations: [T20c4Page]
})
export class T20c4PageModule {}
