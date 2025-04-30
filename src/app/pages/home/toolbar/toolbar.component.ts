import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';

import { Router } from '@angular/router';
import { StateService } from '../../../core/services/utilities/state.service';
import { ThemeMode, ThemeService } from '../../../core/services/utilities/theme.service';
import { WindowsObserverService } from '../../../core/services/utilities/windows-observer.service';
import { IS_MEDIUM, TITLE_NAME } from '../../app.contants';
import { AuthService } from '../../../core/services/firebase/auth.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatMenuModule,
    MatDividerModule,
    AsyncPipe,
  ],
  template: `
       <mat-toolbar>
      <div class="left-container">
        @if (viewport() <= isMedium) {
        <button mat-icon-button matTooltip="Menu" (click)="toggleDrawer()">
          <mat-icon>menu</mat-icon>
        </button>
        }
        <span
          ><strong>{{ appName }}</strong></span
        >
      </div>

      <div class="avatar-container">
        <button mat-icon-button matTooltip="notifications">
          <mat-icon>notifications</mat-icon>
        </button>
        <img
          [src]="(userData|async)?.photoURL ?? 'asset/avatar.png'"
          alt="Avatar profile"
          width="32px"
          height="32px"
          matTooltip="profile"
          [matMenuTriggerFor]="menu"
        />
      </div>
      <mat-menu #menu="matMenu">
        <button mat-menu-item [matMenuTriggerFor]="themeMenu">
          <mat-icon>dark_mode</mat-icon>
          <span>Theme</span>
        </button>
        <mat-divider />

        <button mat-menu-item (click)="logOut()">
          <mat-icon>logout</mat-icon>
          <span>Déconnexion</span>
        </button>
      </mat-menu>
      <mat-menu #themeMenu="matMenu">
        <button mat-menu-item (click)="switchTheme('device-theme')">
          Appareil
        </button>
        <button mat-menu-item (click)="switchTheme('light-theme')">
          Claire
        </button>
        <button mat-menu-item (click)="switchTheme('dark-theme')">
          Sombre
        </button>
      </mat-menu>
    </mat-toolbar>
    <mat-divider />
  `,
  styles: `
  mat-toolbar {
    display: flex; 
    justify-content: space-between;
    align-items: center;

    .left-container, .avatar-container {
      display: flex;
      align-items: center;
      gap:0.5rem
    }

    img {
      border-radius: 50%;
      background: lightgray;
      cursor: pointer;
      transition: 250ms;

      &:hover {
        transform: scale(0.98);
      }
    }
  }
  `
})
export class ToolbarComponent {
  appName = TITLE_NAME;
  isMedium = IS_MEDIUM;
  state = inject(StateService);
  auth = inject(AuthService);
  userData = this.auth.userdata;
  viewport = inject(WindowsObserverService).width;
  ts = inject(ThemeService);
  router = inject(Router);

  switchTheme = (theme: ThemeMode) => this.ts.setTheme(theme);

  toggleDrawer = () => this.state.isToggleDrawer.update((value) => !value);

  async logOut() {
    await this.auth.logOut();
    this.router.navigate(['/login']);
  }
}
