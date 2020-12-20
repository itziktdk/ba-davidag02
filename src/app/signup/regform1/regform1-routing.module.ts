import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Regform1Page } from './regform1.page';

const routes: Routes = [
  {
    path: '',
    component: Regform1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Regform1PageRoutingModule {}
