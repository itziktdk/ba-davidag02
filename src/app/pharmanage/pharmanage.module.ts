import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PharmanagePageRoutingModule } from './pharmanage-routing.module';

import { PharmanagePage } from './pharmanage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PharmanagePageRoutingModule
  ],
  declarations: [PharmanagePage]
})
export class PharmanagePageModule {}
