import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Regform2PageRoutingModule } from './regform2-routing.module';

import { Regform2Page } from './regform2.page';
import { FormatFileSizePipe } from './format-file-size.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Regform2PageRoutingModule
  ],
  declarations: [Regform2Page]
})
export class Regform2PageModule {}
