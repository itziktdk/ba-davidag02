import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchdocPage } from './searchdoc.page';

const routes: Routes = [
  {
    path: '',
    component: SearchdocPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchdocPageRoutingModule {}
