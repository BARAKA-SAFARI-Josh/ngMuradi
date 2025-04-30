import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { COMPANY_NAME, TITLE_NAME } from '../app.contants';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../core/services/firebase/auth.service';
import { LoginSkelletonComponent } from "./login-skelleton.component";
import { Subscription } from 'rxjs';
import { User } from '@angular/fire/auth';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  imports: [MatCardModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatButtonModule,
    FormsModule, LoginSkelletonComponent],
  templateUrl:'./login.component.html',
  styles: `
  .divider{
    display: flex;
    justify-content: space-between;
    align-items : center;
    margin : 1rem 0;

    mat-divider {
      width : 35%;
    }
  }
  `
})
export default class LoginComponent implements OnInit, OnDestroy{
  appName = TITLE_NAME;
  campanyName = COMPANY_NAME
  date = new Date();
  auth = inject(AuthService);
  loading = signal(true);
  authSub!: Subscription;
  router = inject(Router)

  loginWithGoogle = async () => {
    try {
      this.loading.set(true);
      await this.auth.logInWithGoogle();
      this.loading.set(false);
    } catch (exception) {
      this.loading.set(false);
      location.reload();// On réactualise la page
      console.log(exception);
    }
  };

  ngOnInit(): void {
    //watching auth state
    this.authSub = this.auth.state.subscribe((user: User | null) => {
      this.loading.set(false);

      if (user) {
        this.router.navigate(['/']);
      }
    });
  }

  ngOnDestroy() {
    this.authSub?.unsubscribe();
  }
}
