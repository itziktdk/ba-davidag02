import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductcategoriesPageRoutingModule } from './productcategories-routing.module';

import { ProductcategoriesPage } from './productcategories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductcategoriesPageRoutingModule
  ],
  declarations: [ProductcategoriesPage]
})
export class ProductcategoriesPageModule {}
