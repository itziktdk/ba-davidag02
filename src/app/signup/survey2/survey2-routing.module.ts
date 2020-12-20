import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Survey2Page } from './survey2.page';

const routes: Routes = [
  {
    path: '',
    component: Survey2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Survey2PageRoutingModule {}
