import { Routes } from '@angular/router';

import { authGuard } from '@core/guards/auth.guard';
import { authRoutes } from '@features/auth/auth.routes';
import { featureRoutes } from '@features/feature.routes';
import { CoreLayoutComponent } from '@shared/core-layout/core-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: CoreLayoutComponent,
    canActivate: [authGuard()],
    children: featureRoutes,
  },
  // AUTH ROUTES
  ...authRoutes,
];
