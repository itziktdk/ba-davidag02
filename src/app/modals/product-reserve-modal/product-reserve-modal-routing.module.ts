import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductReserveModalPage } from './product-reserve-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ProductReserveModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductReserveModalPageRoutingModule {}
