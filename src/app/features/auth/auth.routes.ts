import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { RouteNames } from '@core/configs/route-names.config';
import { loginGuard } from './guards/auth.guard';
import { logoutGuard } from './guards/logout.guard';
import { AuthEffects } from './store/auth.effects';
import { authReducer } from './store/auth.reducer';
import { AUTH_FEATURE_KEY } from './store/auth.selectors';

export const authRoutes: Routes = [
  {
    path: RouteNames.auth,
    canActivateChild: [loginGuard()],
    loadComponent: () => import('./auth.component').then((m) => m.AuthComponent),
    providers: [
      provideEffects(AuthEffects),
      provideState({ name: AUTH_FEATURE_KEY, reducer: authReducer }),
    ],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: RouteNames.login,
      },
      {
        path: RouteNames.login,
        loadComponent: () =>
          import('./components/login/login.component').then((m) => m.LoginComponent),
      },
      {
        path: RouteNames.registration,
        loadComponent: () =>
          import('./components/registration/registration.component').then(
            (m) => m.RegistrationComponent,
          ),
      },
      {
        path: RouteNames.resetPassword,
        loadComponent: () =>
          import('./components/reset-password/reset-password.component').then(
            (m) => m.ResetPasswordComponent,
          ),
      },
      {
        path: RouteNames.logout,
        canActivate: [logoutGuard()],
        loadComponent: () =>
          import('./components/login/login.component').then((m) => m.LoginComponent),
      },
    ],
  },
];
