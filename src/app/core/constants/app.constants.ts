import { SnackbarOptions } from '@core/interfaces/snackbar-options';

// Snackbar options
export const DEFAULT_SNACKBAR_CONFIG: SnackbarOptions = {
  action: 'Close',
  duration: 5000,
  horizontalPosition: 'end',
  verticalPosition: 'top',
};
export const SNACKBAR_SUCCESS_CLASS = 'snackbar-success';
export const SNACKBAR_INFO_CLASS = 'snackbar-info';
export const SNACKBAR_WARNING_CLASS = 'snackbar-warning';
export const SNACKBAR_ERROR_CLASS = 'snackbar-error';

// Token keys
export const ACCESS_TOKEN_KEY = 'accessToken';
export const REFRESH_TOKEN_KEY = 'refreshToken';
