import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  login(email: string, pass: string): Promise<{}> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, pass);
  }

  checkAuth(): Observable<{}>  {
    return this.afAuth.authState;
  }

  logOut(): void {
    this.afAuth.auth.signOut();
  }
}
