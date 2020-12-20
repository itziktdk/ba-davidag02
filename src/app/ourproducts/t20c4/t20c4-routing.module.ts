import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { T20c4Page } from './t20c4.page';

const routes: Routes = [
  {
    path: '',
    component: T20c4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class T20c4PageRoutingModule {}
