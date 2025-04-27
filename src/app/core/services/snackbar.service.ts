import { inject, Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, TextOnlySnackBar } from '@angular/material/snack-bar';

import {
  DEFAULT_SNACKBAR_CONFIG,
  SNACKBAR_ERROR_CLASS,
  SNACKBAR_INFO_CLASS,
  SNACKBAR_SUCCESS_CLASS,
  SNACKBAR_WARNING_CLASS,
} from '@core/constants/app.constants';
import { SnackbarOptions } from '@interfaces';

@Injectable({ providedIn: 'root' })
export class SnackbarService {
  private readonly snackBar = inject(MatSnackBar);

  success(message: string, options?: SnackbarOptions): MatSnackBarRef<TextOnlySnackBar> {
    const { action, ...config } = this.getSnackBarConfig(options);

    return this.snackBar.open(message, action, { ...config, panelClass: SNACKBAR_SUCCESS_CLASS });
  }

  info(message: string, options?: SnackbarOptions): MatSnackBarRef<TextOnlySnackBar> {
    const { action, ...config } = this.getSnackBarConfig(options);

    return this.snackBar.open(message, action, { ...config, panelClass: SNACKBAR_INFO_CLASS });
  }

  warn(message: string, options?: SnackbarOptions): MatSnackBarRef<TextOnlySnackBar> {
    const { action, ...config } = this.getSnackBarConfig(options);

    return this.snackBar.open(message, action, { ...config, panelClass: SNACKBAR_WARNING_CLASS });
  }

  error(message: string, options?: SnackbarOptions): MatSnackBarRef<TextOnlySnackBar> {
    const { action, ...config } = this.getSnackBarConfig(options);

    return this.snackBar.open(message, action, { ...config, panelClass: SNACKBAR_ERROR_CLASS });
  }

  showAll(messages: SnackbarOptions[]): void {
    // TODO : Implement this method to show all messages in the snackbar

    throw new Error('Method not implemented.');
  }

  private getSnackBarConfig(config?: SnackbarOptions): SnackbarOptions {
    return { ...DEFAULT_SNACKBAR_CONFIG, ...(config || {}) };
  }
}
