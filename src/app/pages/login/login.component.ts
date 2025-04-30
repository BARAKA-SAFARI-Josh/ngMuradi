import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { COMPANY_NAME, TITLE_NAME } from '../app.contants';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, NgForm } from '@angular/forms';




@Component({
  selector: 'app-login',
  imports: [MatCardModule,MatDividerModule,MatFormFieldModule,MatInputModule, MatButtonModule
    , FormsModule,
  ],
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
export default class LoginComponent {
  appName = TITLE_NAME;
  campanyName = COMPANY_NAME
  date = new Date()
  loginWithGoogle(){

  }
}
