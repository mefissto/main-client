import { DestroyRef, inject, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { map, Observable, of, Subject, throttle } from 'rxjs';

import { DEFAULT_SNACKBAR_CONFIG } from '@core/constants/app.constants';
import { SnackbarNotification } from '@interfaces';

@Injectable({ providedIn: 'root' })
export class SnackbarService {
  private readonly snackBar = inject(MatSnackBar);
  private readonly destroyRef = inject(DestroyRef);
  private readonly snackbarNotification$ = new Subject<SnackbarNotification>();

  constructor() {
    this.snackbarNotification$
      .pipe(
        throttle(() => this.getSnackBarDelay(), { leading: true, trailing: true }),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(({ message, action, config }) => {
        this.snackBar.open(message, action, this.getSnackBarConfig(config));
      });
  }

  open(message: string, action?: string, config?: MatSnackBarConfig): void {
    this.snackbarNotification$.next({ message, action, config });
  }

  private getSnackBarDelay(): Observable<null> {
    const snackbarRef = this.snackBar._openedSnackBarRef;

    if (!!snackbarRef) {
      return snackbarRef.afterDismissed().pipe(map(() => null));
    } else {
      return of(null);
    }
  }

  private getSnackBarConfig(config?: MatSnackBarConfig): MatSnackBarConfig {
    return { ...DEFAULT_SNACKBAR_CONFIG, ...(config || {}) };
  }
}
