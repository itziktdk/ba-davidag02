import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VaucherPage } from './vaucher.page';

const routes: Routes = [
  {
    path: '',
    component: VaucherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VaucherPageRoutingModule {}
