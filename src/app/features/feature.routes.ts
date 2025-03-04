import { Routes } from '@angular/router';

import { profileRoutes } from './profile/profile.routes';

export const featureRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
  },
  // PROFILE ROUTES
  ...profileRoutes,
];
