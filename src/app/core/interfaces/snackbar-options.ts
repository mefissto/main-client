import {
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

export interface SnackbarOptions<T = unknown> {
  action?: string;
  duration?: number;
  panelClass?: string;
  horizontalPosition?: MatSnackBarHorizontalPosition;
  verticalPosition?: MatSnackBarVerticalPosition;
  data?: T;

  // Optional message property to allow passing a message directly in the options
  // Could be user for displaying multiple messages at once
  message?: string;
}
