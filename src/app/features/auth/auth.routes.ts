import { Routes } from '@angular/router';

import { LogoutGuard } from './guards/logout.guard';

export const authRoutes: Routes = [
  {
    path: 'auth',
    loadComponent: () => import('./auth.component').then((m) => m.AuthComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./components/login/login.component').then((m) => m.LoginComponent),
      },
      {
        path: 'registration',
        loadComponent: () =>
          import('./components/registration/registration.component').then(
            (m) => m.RegistrationComponent,
          ),
      },
      {
        path: 'reset-password',
        loadComponent: () =>
          import('./components/reset-password/reset-password.component').then(
            (m) => m.ResetPasswordComponent,
          ),
      },
      {
        path: 'logout',
        canActivate: [LogoutGuard],
        loadComponent: () =>
          import('./components/login/login.component').then((m) => m.LoginComponent),
      },
    ],
  },
];
