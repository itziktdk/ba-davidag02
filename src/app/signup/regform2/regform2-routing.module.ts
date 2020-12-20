import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Regform2Page } from './regform2.page';

const routes: Routes = [
  {
    path: '',
    component: Regform2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Regform2PageRoutingModule {}
