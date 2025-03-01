import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptors,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { routerReducer } from '@ngrx/router-store';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { providePrimeNG } from 'primeng/config';

import { ErrorInterceptor } from '@core/interceptors/error.interceptor';
import { authInterceptor } from '@core/interceptors/token.interceptor';
import { PcThemePreset } from '@core/theme/theme-preset';
import { MessageService } from 'primeng/api';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      // DI-based interceptors must be explicitly enabled.
      withInterceptorsFromDi(),
      withInterceptors([authInterceptor]),
    ),
    provideAnimationsAsync(),
    providePrimeNG({
      ripple: true,
      theme: {
        preset: PcThemePreset,
        options: {
          darkModeSelector: '.pc-dark-theme',
          cssLayer: {
            name: 'primeng',
            order: 'app-styles, tailwind-base, primeng, tailwind-utilities',
          },
        },
      },
    }),
    MessageService,
    provideStore(),
    provideState({ name: 'app', reducer: routerReducer }),
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
};
