import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductmodalPage } from './productmodal.page';

const routes: Routes = [
  {
    path: '',
    component: ProductmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductmodalPageRoutingModule {}
