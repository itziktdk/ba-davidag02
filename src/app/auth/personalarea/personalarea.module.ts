import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalareaPageRoutingModule } from './personalarea-routing.module';

import { PersonalareaPage } from './personalarea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalareaPageRoutingModule
  ],
  declarations: [PersonalareaPage]
})
export class PersonalareaPageModule {}
