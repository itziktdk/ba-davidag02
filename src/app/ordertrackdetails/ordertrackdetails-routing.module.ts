import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdertrackdetailsPage } from './ordertrackdetails.page';

const routes: Routes = [
  {
    path: '',
    component: OrdertrackdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdertrackdetailsPageRoutingModule {}
