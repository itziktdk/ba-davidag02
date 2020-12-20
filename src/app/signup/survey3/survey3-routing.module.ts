import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Survey3Page } from './survey3.page';

const routes: Routes = [
  {
    path: '',
    component: Survey3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Survey3PageRoutingModule {}
