import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OilsPage } from './oils.page';

const routes: Routes = [
  {
    path: '',
    component: OilsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OilsPageRoutingModule {}
