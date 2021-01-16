import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SearchdocPage } from './searchdoc/searchdoc.page';
import { SearchdocPageModule } from './searchdoc/searchdoc.module';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'pharmacies',
    loadChildren: () => import('./pharmacies/pharmacies.module').then(m => m.PharmaciesPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'pharmodal',
    loadChildren: () => import('./modals/pharmodal/pharmodal.module').then(m => m.PharmodalPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'doctors',
    loadChildren: () => import('./doctors/doctors.module').then(m => m.DoctorsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'docmodal',
    loadChildren: () => import('./modals/docmodal/docmodal.module').then(m => m.DocmodalPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'ourproducts',
    loadChildren: () => import('./ourproducts/ourproducts.module').then(m => m.OurproductsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'license',
    loadChildren: () => import('./license/license.module').then(m => m.LicensePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'productmodal',
    loadChildren: () => import('./modals/productmodal/productmodal.module').then(m => m.ProductmodalPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'regform1',
    loadChildren: () => import('./signup/regform1/regform1.module').then(m => m.Regform1PageModule)
  },
  {
    path: 'regform2',
    loadChildren: () => import('./signup/regform2/regform2.module').then(m => m.Regform2PageModule)
  },
  {
    path: 'survey1',
    loadChildren: () => import('./signup/survey1/survey1.module').then(m => m.Survey1PageModule)
  },
  {
    path: 'survey2',
    loadChildren: () => import('./signup/survey2/survey2.module').then(m => m.Survey2PageModule)
  },
  {
    path: 'survey3',
    loadChildren: () => import('./signup/survey3/survey3.module').then(m => m.Survey3PageModule)
  },
  {
    path: 'regfinish',
    loadChildren: () => import('./signup/regfinish/regfinish.module').then(m => m.RegfinishPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'login2',
    loadChildren: () => import('./login2/login2.module').then(m => m.Login2PageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./signup/password/password.module').then(m => m.PasswordPageModule)
  },
  {
    path: 'productcategories',
    loadChildren: () => import('./productcategories/productcategories.module').then(m => m.ProductcategoriesPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'ourproducts',
    loadChildren: () => import('./ourproducts/ourproducts.module').then(m => m.OurproductsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'oils',
    loadChildren: () => import('./ourproducts/oils/oils.module').then(m => m.OilsPageModule),
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 't20c4',
    loadChildren: () => import('./ourproducts/t20c4/t20c4.module').then(m => m.T20c4PageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then(m => m.NewsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'register1',
    loadChildren: () => import('./register1/register1.module').then(m => m.Register1PageModule)
  },
  {
    path: 'realvouchers',
    loadChildren: () => import('./realvouchers/realvouchers.module').then(m => m.RealvouchersPageModule)
  },
  {
    path: 'pharmanage',
    loadChildren: () => import('./pharmanage/pharmanage.module').then(m => m.PharmanagePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'pharmprofile',
    loadChildren: () => import('./pharmprofile/pharmprofile.module').then(m => m.PharmprofilePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'vaucher',
    loadChildren: () => import('./vaucher/vaucher.module').then(m => m.VaucherPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'ordertracking',
    loadChildren: () => import('./ordertracking/ordertracking.module').then(m => m.OrdertrackingPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'ordertrackdetails',
    loadChildren: () => import('./ordertrackdetails/ordertrackdetails.module').then(m => m.OrdertrackdetailsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'searchdoc',
    loadChildren: () => import('./searchdoc/searchdoc.module').then(m => m.SearchdocPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'product-reserve-modal',
    loadChildren: () => import('./modals/product-reserve-modal/product-reserve-modal.module').then( m => m.ProductReserveModalPageModule)
  },  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
