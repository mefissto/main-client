import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Store } from '@ngrx/store';

import { logoutRequest } from '../store/auth.actions';

export function logoutGuard(): CanActivateFn {
  return () => {
    inject(Store).dispatch(logoutRequest());

    return false;
  };
}
