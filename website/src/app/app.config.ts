import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { APP_ROUTES } from './routes/routes';
import { provideAnimations } from '@angular/platform-browser/animations'


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true })
    , provideRouter(APP_ROUTES, withComponentInputBinding())
    , provideAnimations()
  ]
};

