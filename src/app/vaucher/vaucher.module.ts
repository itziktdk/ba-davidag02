import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VaucherPageRoutingModule } from './vaucher-routing.module';

import { VaucherPage } from './vaucher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VaucherPageRoutingModule
  ],
  declarations: [VaucherPage]
})
export class VaucherPageModule {}
