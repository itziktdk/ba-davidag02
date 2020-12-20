import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Survey1PageRoutingModule } from './survey1-routing.module';

import { Survey1Page } from './survey1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Survey1PageRoutingModule
  ],
  declarations: [Survey1Page]
})
export class Survey1PageModule {}
