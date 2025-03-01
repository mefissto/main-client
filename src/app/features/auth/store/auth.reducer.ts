import { Action, createReducer, on } from '@ngrx/store';

import { User } from '@interfaces';
import * as authActions from './auth.actions';

export interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  user: User | null;
  loading: boolean;
  error: any;
}

export const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  loading: false,
  error: null,
  user: null,
};

const _authReducer = createReducer(
  initialState,
  // Login
  on(authActions.signInRequest, (state) => ({ ...state, loading: true })),
  on(authActions.signInSuccess, (state, { payload }) => ({
    ...state,
    loading: false,
    accessToken: payload.accessToken,
    refreshToken: payload.refreshToken,
    error: null,
  })),
  on(authActions.signInFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
    accessToken: null,
  })),

  // Register
  on(authActions.signUpRequest, (state) => ({ ...state, loading: true })),
  on(authActions.signUpSuccess, (state, { payload }) => ({
    ...state,
    loading: false,
    user: payload,
    error: null,
  })),
  on(authActions.signUpFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // Reset Password
  on(authActions.resetPasswordRequest, (state) => ({ ...state, loading: true })),
  on(authActions.resetPasswordSuccess, (state) => ({ ...state, loading: false, error: null })),
  on(authActions.resetPasswordFailure, (state, { error }) => ({ ...state, loading: false, error })),

  // Logout
  on(authActions.logoutRequest, () => initialState),
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return _authReducer(state, action);
}
