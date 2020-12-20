import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PharmodalPage } from './pharmodal.page';

const routes: Routes = [
  {
    path: '',
    component: PharmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PharmodalPageRoutingModule {}
