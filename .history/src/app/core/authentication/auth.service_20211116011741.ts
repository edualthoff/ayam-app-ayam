import { AuthRequestService } from './../services/http/auth/auth-request.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { map, share, switchMap, tap } from 'rxjs/operators';
import { TokenService } from './token.service';
import { User } from './interface';
import { guest } from './user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user$ = new BehaviorSubject<User>(guest);
  private grantType = 'authorization_code';

  constructor(private loginService: AuthRequestService, private token: TokenService) { }

  check() {
    return this.token.valid();
  }

  loginUsername(username: string, password: string) {
    return this.loginService.login(username, password, this.grantType).pipe(
      tap(token => this.token.set(token)),
      map(() => this.check())
    );
  }

  refresh() {
    return this.loginService.refresh().pipe(
      tap(token => this.token.refresh(token)),
      map(() => this.check())
    );
  }

  logout() {
    return this.loginService.logout().pipe(
      tap(() => this.token.clear()),
      map(() => !this.check())
    );
  }

  user() {
    return this.user$.pipe(share());
  }
}
