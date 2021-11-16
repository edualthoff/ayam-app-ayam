import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class SettingsInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(
      request.clone({
        headers: request.headers.append('client', 'OGUyOGZhNmItZmU5NC00NTA4LThjODctNTQ2YWRhOTJkMDQx'),
      })
    );
  }
}
