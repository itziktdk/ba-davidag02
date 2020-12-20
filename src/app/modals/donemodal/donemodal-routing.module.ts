import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonemodalPage } from './donemodal.page';

const routes: Routes = [
  {
    path: '',
    component: DonemodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonemodalPageRoutingModule {}
