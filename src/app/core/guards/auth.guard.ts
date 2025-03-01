import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { RouteNames } from '@core/configs/route-names.config';
import { TokenService } from '@features/auth/services/token.service';

export function authGuard(): CanActivateFn {
  return () => {
    const tokenService = inject(TokenService);
    const router = inject(Router);

    if (tokenService.hasAccessToken()) {
      return true;
    }

    router.navigate([RouteNames.authLogin]);
    return false;
  };
}
