import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegfinishPage } from './regfinish.page';

const routes: Routes = [
  {
    path: '',
    component: RegfinishPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegfinishPageRoutingModule {}
