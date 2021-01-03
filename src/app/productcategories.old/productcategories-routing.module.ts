import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductcategoriesPage } from './productcategories.page';

const routes: Routes = [
  {
    path: '',
    component: ProductcategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductcategoriesPageRoutingModule {}
