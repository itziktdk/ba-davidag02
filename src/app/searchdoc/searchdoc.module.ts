import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchdocPageRoutingModule } from './searchdoc-routing.module';

import { SearchdocPage } from './searchdoc.page';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchdocPageRoutingModule,
    NgSelectModule
  ],
  declarations: [SearchdocPage]
})
export class SearchdocPageModule {}
