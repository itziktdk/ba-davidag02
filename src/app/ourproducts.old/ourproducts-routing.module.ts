import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurproductsPage } from './ourproducts.page';

const routes: Routes = [
  {
    path: '',
    component: OurproductsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurproductsPageRoutingModule {}
