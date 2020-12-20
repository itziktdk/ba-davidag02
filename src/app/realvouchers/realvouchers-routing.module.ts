import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealvouchersPage } from './realvouchers.page';

const routes: Routes = [
  {
    path: '',
    component: RealvouchersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealvouchersPageRoutingModule {}
