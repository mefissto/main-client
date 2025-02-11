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
      ofType(authActions.signInRequest),
      mergeMap((action) =>
        this.authService.login(action.payload).pipe(
          map((signInResponse) => authActions.signInSuccess({ payload: signInResponse })),
          catchError((error) => of(authActions.signInFailure({ error }))),
        ),
      ),
    ),
  );

  readonly registration$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.signUpRequest),
      mergeMap((action) =>
        this.authService.registration(action.payload).pipe(
          map((user) => authActions.signUpSuccess(user)),
          catchError((error) => of(authActions.signUpFailure({ error }))),
        ),
      ),
    ),
  );
}
