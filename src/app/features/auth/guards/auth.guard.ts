import { inject } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivateFn,
    Router,
    RouterStateSnapshot,
} from '@angular/router';

import { RouteNames } from '@core/configs/route-names.config';
import { TokenService } from '../services/token.service';

export function loginGuard(): CanActivateFn {
  return (activatedRouteSnapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const isLogout = state.url.includes(RouteNames.authLogout);
    const tokenService = inject(TokenService);
    const router = inject(Router);

    if (!isLogout && tokenService.hasAccessToken()) {
      router.navigate(['']);
      return false;
    }

    return true;
  };
}
