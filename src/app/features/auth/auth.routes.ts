import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { LogoutGuard } from './guards/logout.guard';
import { AuthEffects } from './store/auth.effects';
import { authReducer } from './store/auth.reducer';
import { AUTH_FEATURE_KEY } from './store/auth.selectors';

export const authRoutes: Routes = [
  {
    path: 'auth',
    loadComponent: () => import('./auth.component').then((m) => m.AuthComponent),
    providers: [
      provideEffects(AuthEffects),
      provideState({ name: AUTH_FEATURE_KEY, reducer: authReducer }),
    ],
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
