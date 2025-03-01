import { HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';

import { TokenService } from '@features/auth/services/token.service';

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  // Inject the current `TokenService` and use it to get an authentication token:
  const accessToken = inject(TokenService).getAccessToken();

  // If there is no token, just pass the request through:
  if (!accessToken) {
    return next(req);
  }

  // Clone the request to add the authentication header.
  const newReq = req.clone({
    headers: req.headers.append('Authorization', `Bearer ${accessToken}`),
  });

  return next(newReq);
}
