import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurproductsPage } from './ourproducts.page';

const routes: Routes = [
  {
    path: '',
    component: OurproductsPage
  },
  {
    path: 't20c4',
    loadChildren: () => import('./t20c4/t20c4.module').then( m => m.T20c4PageModule)
  },
  {
    path: 'oils',
    loadChildren: () => import('./oils/oils.module').then( m => m.OilsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurproductsPageRoutingModule {}
