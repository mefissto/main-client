import { MatSnackBarConfig } from '@angular/material/snack-bar';

export interface SnackbarNotification {
  message: string;
  action?: string;
  config?: MatSnackBarConfig;
}
