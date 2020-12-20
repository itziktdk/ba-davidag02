import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalareaPage } from './personalarea.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalareaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalareaPageRoutingModule {}
