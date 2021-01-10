import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import firebase from 'firebase/app';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private navCtrl: NavController
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return new Promise((resolve, reject) => {
      // const navctrl = this.navCtrl;
      // tslint:disable-next-line:only-arrow-functions
      // tslint:disable-next-line:space-before-function-paren
      firebase.auth().onAuthStateChanged((user: any) => {
        if (user) {
          // User is signed in.
          console.log(user);
          resolve(true);
        } else {
          // No user is signed in.
          this.navCtrl.navigateRoot(['/login']);
          localStorage.clear();
          resolve(false);
        }
      });

      // firebase.auth().onAuthStateChanged((user: firebase.User) => {
      //   console.log('User in gurd ', user);

      //   if (user) {
      //     console.log('User is logged in gurd');
      //     // this.authServices.getUserDetails(user.uid);
      //     localStorage.setItem('uid', user.uid);
      //     resolve(true);
      //   } else {
      //     console.log('User is not logged in gurd');
      //     localStorage.clear();
      //     this.router.navigate(['/login']);
      //     resolve(false);
      //   }
      // });
    });


    // // tslint:disable-next-line:only-arrow-functions
    // firebase.auth().onAuthStateChanged(function (user) {
    //   if (user) {
    //     // User is signed in.
    //     console.log(user);
    //     return true;
    //   } else {
    //     // No user is signed in.        
    //     localStorage.clear();
    //     return false;
    //   }
    // });
  }

}
