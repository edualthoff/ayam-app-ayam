import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export const BASE_URL = new InjectionToken<string>('BASE_URL');

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  constructor(@Optional() @Inject(BASE_URL) private baseUrl?: string) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("aquii "+request.url + " "+this.hasScheme(request.url))
    return this.hasScheme(request.url) === false
      ? next.handle(request.clone({ url: this.prependBaseUrl(request.url) }))
      : next.handle(request);
  }

  private hasScheme(url: string): any {
    return this.baseUrl && new RegExp('^(http|https)://', 'i').test(url);
  }

  private prependBaseUrl(url: string): any {
    return [this.baseUrl?.replace(/\/$/g, ''), url.replace(/^\.?\//, '')]
      .filter(val => val)
      .join('/');
  }
}
