import { SettingsInterceptor } from './settings-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { BaseUrlInterceptor } from './base-url-interceptor';
import { AuthorizationInterceptor } from './authorization.interceptor';


/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  // { provide: HTTP_INTERCEPTORS, useClass: SanctumInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: SettingsInterceptor, multi: true },

];
