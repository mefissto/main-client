import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthState } from './auth.reducer';

export const AUTH_FEATURE_KEY = 'auth';

export const selectAuthState = createFeatureSelector<AuthState>(AUTH_FEATURE_KEY);

export const selectToken = createSelector(selectAuthState, (state: AuthState) => state.accessToken);

export const selectAuthLoading = createSelector(
  selectAuthState,
  (state: AuthState) => state.loading,
);

export const selectAuthError = createSelector(selectAuthState, (state: AuthState) => state.error);
