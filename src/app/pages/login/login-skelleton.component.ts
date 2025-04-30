import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-login-skelleton',
  imports: [MatDividerModule],
  template: `
  <div class="skelleton-form" style="padding: 1rem 0;">
    <div class="skelleton skelleton-shape"></div>
    <br>
    <mat-divider/>
    <br>
    <div class="skelleton skelleton-shape"></div>
    <br>
    <div class="skelleton skelleton-button"></div>
  </div>
  `,
  styles: `
        /* Specific skeleton shapes */
      .skelleton-shape{
        height: 40px;
        width: 100%;
      }

      .skelleton-button {
        height: 40px;
        width: 100px;
        place-self: end;
      } 
  `
})
export class LoginSkelletonComponent {

}
