import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pharmacies',
    loadChildren: () => import('../pharmacies/pharmacies.module').then( m => m.PharmaciesPageModule)
  },
  {
    path: 'pharmodal',
    loadChildren: () => import('../modals/pharmodal/pharmodal.module').then( m => m.PharmodalPageModule)
  },
  {
    path: 'doctors',
    loadChildren: () => import('../doctors/doctors.module').then( m => m.DoctorsPageModule)
  },
  {
    path: 'docmodal',
    loadChildren: () => import('../modals/docmodal/docmodal.module').then( m => m.DocmodalPageModule)
  },
  {
    path: 'ourproducts',
    loadChildren: () => import('../ourproducts/ourproducts.module').then( m => m.OurproductsPageModule)
  },
  {
    path: 'license',
    loadChildren: () => import('../license/license.module').then( m => m.LicensePageModule)
  },
  {
    path: 'productmodal',
    loadChildren: () => import('../modals/productmodal/productmodal.module').then( m => m.ProductmodalPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('../contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'regform1',
    loadChildren: () => import('../signup/regform1/regform1.module').then( m => m.Regform1PageModule)
  },
  {
    path: 'regform2',
    loadChildren: () => import('../signup/regform2/regform2.module').then( m => m.Regform2PageModule)
  },
  {
    path: 'survey1',
    loadChildren: () => import('../signup/survey1/survey1.module').then( m => m.Survey1PageModule)
  },
  {
    path: 'survey2',
    loadChildren: () => import('../signup/survey2/survey2.module').then( m => m.Survey2PageModule)
  },
  {
    path: 'survey3',
    loadChildren: () => import('../signup/survey3/survey3.module').then( m => m.Survey3PageModule)
  },
  {
    path: 'regfinish',
    loadChildren: () => import('../signup/regfinish/regfinish.module').then( m => m.RegfinishPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('../signup/password/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'productcategories',
    loadChildren: () => import('../productcategories/productcategories.module').then( m => m.ProductcategoriesPageModule)
  },
  {
    path: 'ourproducts',
    loadChildren: () => import('../ourproducts/ourproducts.module').then( m => m.OurproductsPageModule)
  },
  {
    path: 'oils',
    loadChildren: () => import('../ourproducts/oils/oils.module').then( m => m.OilsPageModule)
  }
  ,
  {
    path: 't20c4',
    loadChildren: () => import('../ourproducts/t20c4/t20c4.module').then( m => m.T20c4PageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('../news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'register1',
    loadChildren: () => import('../register1/register1.module').then( m => m.Register1PageModule)
  },
  {
    path: 'realvouchers',
    loadChildren: () => import('../realvouchers/realvouchers.module').then( m => m.RealvouchersPageModule)
  },
  {
    path: 'pharmanage',
    loadChildren: () => import('../pharmanage/pharmanage.module').then( m => m.PharmanagePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login2',
    loadChildren: () => import('../login2/login2.module').then( m => m.Login2PageModule)
  },
  {
    path: 'pharmprofile',
    loadChildren: () => import('../pharmprofile/pharmprofile.module').then( m => m.PharmprofilePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
