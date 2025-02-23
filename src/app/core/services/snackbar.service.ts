import { inject, Injectable } from '@angular/core';
import { MessageService, ToastMessageOptions } from 'primeng/api';

import { DEFAULT_SNACKBAR_CONFIG } from '@core/constants/app.constants';

@Injectable({ providedIn: 'root' })
export class SnackbarService {
  private readonly messageService = inject(MessageService);

  success(message: ToastMessageOptions): void {
    this.messageService.add({ severity: 'success', ...this.getSnackBarConfig(message) });
  }

  info(message: ToastMessageOptions): void {
    this.messageService.add({ severity: 'info', ...this.getSnackBarConfig(message) });
  }

  warn(message: ToastMessageOptions): void {
    this.messageService.add({ severity: 'warn', ...this.getSnackBarConfig(message) });
  }

  error(message: ToastMessageOptions): void {
    this.messageService.add({ severity: 'error', ...this.getSnackBarConfig(message) });
  }

  contrast(message: ToastMessageOptions): void {
    this.messageService.add({ severity: 'contrast', ...this.getSnackBarConfig(message) });
  }

  secondary(message: ToastMessageOptions): void {
    this.messageService.add({ severity: 'secondary', ...this.getSnackBarConfig(message) });
  }

  showAll(messages: ToastMessageOptions[]): void {
    this.messageService.addAll(messages);
  }

  clear(key?: string): void {
    this.messageService.clear(key);
  }

  private getSnackBarConfig(config?: ToastMessageOptions): ToastMessageOptions {
    return { ...DEFAULT_SNACKBAR_CONFIG, ...(config || {}) };
  }
}
