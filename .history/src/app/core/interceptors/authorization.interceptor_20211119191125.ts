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
    console.log("inter "+request.url)
    return this.hasScheme(request.url) != false ?
    next.handle( request.clone({headers: request.headers.append('Authorization', this.token.headerValue() as string)}))
    : next.handle(request);
  }



  private hasScheme(url: string): any  {
    console.log("url "+JSON.stringify(url.search('(logout|refresh)'))+" "+new RegExp('(logout|refresh)', 'i').test(url))
    return new RegExp('(logout|refresh)', 'i').test(url);
  }

}
