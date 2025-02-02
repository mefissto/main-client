import { Action, createReducer, on } from '@ngrx/store';

import * as authActions from './auth.actions';

export interface AuthState {
  user: any;
  loading: boolean;
  error: any;
}

export const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const _authReducer = createReducer(
  initialState,
  // Login
  on(authActions.loginRequest, (state) => ({ ...state, loading: true })),
  on(authActions.loginSuccess, (state, { payload }) => ({
    ...state,
    loading: false,
    user: payload,
  })),
  on(authActions.loginFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
    user: null,
  })),

  // Register
  on(authActions.registerRequest, (state) => ({ ...state, loading: true })),
  on(authActions.registerSuccess, (state, { payload }) => ({
    ...state,
    loading: false,
    user: payload,
  })),
  on(authActions.registerFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
    user: null,
  })),

  // Reset Password
  on(authActions.resetPasswordRequest, (state) => ({ ...state, loading: true })),
  on(authActions.resetPasswordSuccess, (state) => ({ ...state, loading: false })),
  on(authActions.resetPasswordFailure, (state, { error }) => ({ ...state, loading: false, error })),

  // Logout
  on(authActions.logoutSuccess, () => initialState),
  on(authActions.logoutFailure, (state, { error }) => ({ ...state, error, loading: false })),
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return _authReducer(state, action);
}
