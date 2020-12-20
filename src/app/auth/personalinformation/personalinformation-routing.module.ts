import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalinformationPage } from './personalinformation.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalinformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalinformationPageRoutingModule {}
