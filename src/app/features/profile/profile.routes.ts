import { Routes } from '@angular/router';

import { RouteNames } from '@core/configs/route-names.config';

export const profileRoutes: Routes = [
  {
    path: RouteNames.profile,
    loadComponent: () => import('./profile.component').then((m) => m.ProfileComponent),
    children: [],
  },
];
