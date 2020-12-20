import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Survey1Page } from './survey1.page';

const routes: Routes = [
  {
    path: '',
    component: Survey1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Survey1PageRoutingModule {}
