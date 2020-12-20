import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalPagePage } from './ModalPage.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPagePageRoutingModule {}
