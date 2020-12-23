import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdertrackingPage } from './ordertracking.page';

const routes: Routes = [
  {
    path: '',
    component: OrdertrackingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdertrackingPageRoutingModule {}
