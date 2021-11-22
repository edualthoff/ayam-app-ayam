import { AuthService } from '../../auth.service';
import { Injectable } from '@angular/core';
import { RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  private _routerFrom;
  get routerFrom() {
    return this._routerFrom;
  }
  private _routerTo;
  get routerTo() {
    return this._routerTo;
  }

  constructor(private auth: AuthService) { }


  authenticate(state?: RouterStateSnapshot, stateCurrent?: RouterStateSnapshot, role?: string): boolean | UrlTree {
    this.auth.state = state;
    this.auth.stateCurrent = stateCurrent;
    return this.auth.check(role);
  }

  passingRouterToAndFrom(routerTo: string, routerFrom: string) {
    this._routerTo = routerTo;
    this._routerFrom = routerFrom;
  }
}
