import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    public fAuth: AngularFireAuth
  ) { }

  authStatus() {
    return this.fAuth.authState;
  }

}
