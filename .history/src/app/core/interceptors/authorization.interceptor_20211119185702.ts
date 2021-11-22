import { TokenService } from './../authentication/token.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  constructor(private token: TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("inter "+this.token.valid())
    return this.hasTokenHeaderValue(request.url) ?
    next.handle( request.clone({headers: request.headers.append('Authorization', this.token.headerValue() as string)}))
    : next.handle(request);
  }



  private hasTokenHeaderValue(url: String) {
    console.log("url "+JSON.stringify(url.search('login')))
    return this.token.headerRefreshValue();
  }

}
