import { HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { SnackbarService } from '@core/services/snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  private readonly snackbarService = inject(SnackbarService);

  handleHttpErrorResponse(errResponse: HttpErrorResponse): void {
        switch (errResponse.status) {
      case 400:
        this.showErrorMessage(errResponse);
        break;
      // Add more cases as needed
      default:
        this.showErrorMessage(errResponse);
        break;
    }
  }

  private showErrorMessage(errResponse: HttpErrorResponse): void {
    const messages = this.getErrorMessages(errResponse);
    const summary = errResponse.error.error || 'Error';

    for (const message of messages) {
      this.snackbarService.error({ detail: message, summary });
    }
  }

  private getErrorMessages(errResponse: HttpErrorResponse): string[] {
    const { message, error } = errResponse.error || {};

    if (Array.isArray(message) && message.length) {
      return message;
    } else if (typeof message === 'string' && message.length) {
      return [message];
    }

    return error ? [error] : [];
  }
}
