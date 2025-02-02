import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';
import * as authActions from './auth.actions';

@Injectable()
export class AuthEffects {
  private readonly authService = inject(AuthService);
  private readonly actions$ = inject(Actions);

  readonly login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.loginRequest),
      mergeMap((action) =>
        this.authService.login(action.payload).pipe(
          map((user) => authActions.loginSuccess(user)),
          catchError((error) => of(authActions.loginFailure({ error }))),
        ),
      ),
    ),
  );

  readonly registration$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.registerRequest),
      mergeMap((action) =>
        this.authService.registration(action.payload).pipe(
          map((user) => authActions.registerSuccess(user)),
          catchError((error) => of(authActions.registerFailure({ error }))),
        ),
      ),
    ),
  );
}
