import { Routes } from '@angular/router';

import { authRoutes } from '@features/auth/auth.routes';
import { featureRoutes } from '@features/feature.routes';
import { CoreLayoutComponent } from '@shared/core-layout/core-layout.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CoreLayoutComponent,
    children: featureRoutes,
  },
  // AUTH ROUTES
  ...authRoutes,
];
 