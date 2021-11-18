import { AuthRequestService } from './../services/http/auth/auth-request.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { map,  share, tap } from 'rxjs/operators';
import { TokenService } from './token.service';
import { User } from './interface';
import { guest } from './user';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user$ = new BehaviorSubject<User>(guest);
  // Gran type de acesso no servidor - representa o acesso via usuario e senha
  private grantType: string = 'authorization_code';
  private urlDefault = '/';

  private _stateCurrent: RouterStateSnapshot = null;;
  set stateCurrent(stateCurrent: RouterStateSnapshot) {
    this._stateCurrent = stateCurrent;
  }
  private _state: RouterStateSnapshot = null;
  set state(state: RouterStateSnapshot) {
    this._state = state;
  }

  constructor(private loginService: AuthRequestService, private token: TokenService ) { }

  check(role?: string) {
    console.log("aq "+role)
    if(role !== null && role !== undefined) {
      console.log("aq "+role)
      return this.token.valid() && this.token.getRoles().includes(role);
    }
    return this.token.valid();
  }

  currentRoute(): string {
    return this._stateCurrent ? this._stateCurrent.url : this.urlDefault;
  }

  loginUsername(username: string, password: string) {
    return this.loginService.login(username, password, this.grantType).pipe(
      tap(token => this.token.set(token)),
      map(() => this.validUrlChange()),
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

  private validUrlChange(){
    return this._state != null ? this._state.url : this.urlDefault;
  }
}
