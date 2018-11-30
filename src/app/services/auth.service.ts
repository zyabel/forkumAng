import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth,
              private router: Router) { }

  login(email: string, pass: string): Promise<{}> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, pass);
  }

  checkAuth()  {
    return this.afAuth.authState;
  }

  logOut(): void {
    this.afAuth.auth.signOut();
    this.router.navigate(['/home']);
  }
}
