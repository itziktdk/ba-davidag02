import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private fAuth: AngularFireAuth
  ) { }

  authStatus() {
    return this.fAuth.authState;
  }

}
