import { GuardService } from './permissions/guards/guard.service';
import { TokenService } from './token/token.service';
import { guest } from './user';
import { Pessoa } from './../interfaces/user.interface';
import { AuthRequestService } from './../services/http/auth/auth-request.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { map,  share, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user$ = new BehaviorSubject<Pessoa>(guest);
  // Gran type de acesso no servidor - representa o acesso via usuario e senha
  private grantType: string = 'authorization_code';
  private urlDefault = '/';


  constructor(private loginService: AuthRequestService, private token: TokenService, private guard: GuardService ) { }

  /** Checa se o token não está expirado - tempo */
  check() {
    return this.token.valid();
  }

  loginUsername(username: string, password: string) {
    return this.loginService.login(username, password, this.grantType).pipe(
      tap(token => this.token.set(token)),
      map(() => this.validUrlChange()),
    );
  }

  refresh() {
    return this.loginService.refresh(this.token.refreshValue()).pipe(
      tap(token => this.token.refresh(token)),
      map(() => this.check())
    );
  }

  logout() {
    const rf = this.token.refreshValue();
    this.token.clear();
    return this.loginService.logout(rf).pipe(
      map(() => !this.check())
    );
  }

  user() {
    return this.user$.pipe(share());
  }

  private validUrlChange(){
    console.log("aq url "+this.guard.routerTo)
    return !!this.guard.routerTo ? this.guard.routerTo : this.urlDefault;
  }

  currentRoute(): string {
    return !!this.guard.routerFrom ? this.guard.routerFrom : this.urlDefault;
  }
}
