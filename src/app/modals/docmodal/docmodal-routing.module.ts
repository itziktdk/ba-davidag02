import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocmodalPage } from './docmodal.page';

const routes: Routes = [
  {
    path: '',
    component: DocmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocmodalPageRoutingModule {}
