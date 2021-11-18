import { AuthRequestService } from './../services/http/auth/auth-request.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { map,  share, tap } from 'rxjs/operators';
import { TokenService } from './token.service';
import { User } from './interface';
import { guest } from './user';
import { Router, RouterStateSnapshot } from '@angular/router';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user$ = new BehaviorSubject<User>(guest);
  // Gran type de acesso no servidor - representa o acesso via usuario e senha
  private grantType: string = 'authorization_code';
  private state: RouterStateSnapshot;
  private urlDefault = '/';

  constructor(private loginService: AuthRequestService, private token: TokenService,
    ) { }

  check() {
    return this.token.valid();
  }
  stateRoute(state: RouterStateSnapshot) {
    this.state = state;
  }
  currentRoute(route: Router): string | null {
    return route.url;
  }

  loginUsername(username: string, password: string) {
    return this.loginService.login(username, password, this.grantType).pipe(
      tap(token => this.token.set(token)),
      map(() => this.state != null ? this.state.url : this.urlDefault),
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
