import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

import { ErrorHandlerService } from '@core/services/error-handler.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private errorHandlerService: ErrorHandlerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((errResponse: HttpErrorResponse) => {
        if (errResponse) {
          this.errorHandlerService.handleHttpErrorResponse(errResponse);
        }
        return throwError(() => errResponse);
      }),
    );
  }
}
