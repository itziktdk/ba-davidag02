import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPagePageRoutingModule } from './ModalPage-routing.module';

import { ModalPagePage } from './ModalPage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPagePageRoutingModule
  ],
  declarations: [ModalPagePage]
})
export class ModalPagePageModule {}
