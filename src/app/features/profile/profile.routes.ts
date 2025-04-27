import { Routes } from '@angular/router';

import { RouteNames } from '@core/configs/route-names.config';

export const profileRoutes: Routes = [
  {
    path: RouteNames.profile,
    loadComponent: () => import('./profile.component').then((m) => m.ProfileComponent),
    children: [
      {
        path: RouteNames.overview,
        loadComponent: () =>
          import('./components/profile-overview/profile-overview.component').then(
            (m) => m.ProfileOverviewComponent,
          ),
      },
      {
        path: RouteNames.pets,
        loadComponent: () =>
          import('./components/pets/pets.component').then((m) => m.PetsComponent),
      },
    ],
  },
];
