import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { RouteNames } from '@core/configs/route-names.config';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';
import * as authActions from './auth.actions';

@Injectable()
export class AuthEffects {
  private readonly authService = inject(AuthService);
  private readonly tokenService = inject(TokenService);
  private readonly actions$ = inject(Actions);
  private readonly router = inject(Router);

  readonly login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.signInRequest),
      mergeMap((action) =>
        this.authService.login(action.payload).pipe(
          map((signInResponse) => {
            this.tokenService.saveTokens(signInResponse);
            this.router.navigate(['']);

            return authActions.signInSuccess({ payload: signInResponse });
          }),
          catchError((error) => of(authActions.signInFailure({ error }))),
        ),
      ),
    ),
  );

  readonly loginWithGoogle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.signInWithGoogleRequest),
      mergeMap((action) =>
        this.authService.loginWithGoogle(action.payload).pipe(
          map((signInResponse) => {
            this.tokenService.saveTokens(signInResponse);
            this.router.navigate(['']);

            return authActions.signInWithGoogleSuccess({ payload: signInResponse });
          }),
          catchError((error) => of(authActions.signInWithGoogleFailure({ error }))),
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

  readonly resetPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.resetPasswordRequest),
      mergeMap((action) =>
        this.authService.resetPassword(action.payload).pipe(
          map(() => authActions.resetPasswordSuccess()),
          catchError((error) => of(authActions.resetPasswordFailure({ error }))),
        ),
      ),
    ),
  );

  readonly logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActions.logoutRequest),
        map(() => {
          this.tokenService.clearTokens();
          this.router.navigate([RouteNames.authLogin]);
        }),
      ),
    { dispatch: false },
  );
}
