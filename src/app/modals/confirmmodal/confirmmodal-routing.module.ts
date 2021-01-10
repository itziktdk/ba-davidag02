import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmmodalPage } from './confirmmodal.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmmodalPageRoutingModule {}
