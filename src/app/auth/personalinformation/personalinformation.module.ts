import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalinformationPageRoutingModule } from './personalinformation-routing.module';

import { PersonalinformationPage } from './personalinformation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalinformationPageRoutingModule
  ],
  declarations: [PersonalinformationPage]
})
export class PersonalinformationPageModule {}
