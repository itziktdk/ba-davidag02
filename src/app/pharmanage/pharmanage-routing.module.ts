import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PharmanagePage } from './pharmanage.page';

const routes: Routes = [
  {
    path: '',
    component: PharmanagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PharmanagePageRoutingModule {}
