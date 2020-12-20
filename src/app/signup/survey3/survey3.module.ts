import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Survey3PageRoutingModule } from './survey3-routing.module';

import { Survey3Page } from './survey3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Survey3PageRoutingModule
  ],
  declarations: [Survey3Page]
})
export class Survey3PageModule {}
