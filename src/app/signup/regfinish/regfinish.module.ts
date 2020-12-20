import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegfinishPageRoutingModule } from './regfinish-routing.module';

import { RegfinishPage } from './regfinish.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegfinishPageRoutingModule
  ],
  declarations: [RegfinishPage]
})
export class RegfinishPageModule {}
