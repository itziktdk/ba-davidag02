import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PharmprofilePage } from './pharmprofile.page';

const routes: Routes = [
  {
    path: '',
    component: PharmprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PharmprofilePageRoutingModule {}
