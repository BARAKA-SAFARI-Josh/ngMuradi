import { inject, Injectable } from '@angular/core';
import { Auth, authState, GoogleAuthProvider, signInWithPopup, signOut, user } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth = inject(Auth);
  state = authState(this.auth);
  userdata = user(this.auth);

  logInWithGoogle = ()=> signInWithPopup(this.auth, new GoogleAuthProvider());

  logOut = ()=> signOut(this.auth)
}
