import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Regform1PageRoutingModule } from './regform1-routing.module';

import { Regform1Page } from './regform1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Regform1PageRoutingModule
  ],
  declarations: [Regform1Page]
})
export class Regform1PageModule {}
