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

  constructor() { }

  passingRouterToAndFrom(routerTo: string, routerFrom: string) {
    this._routerTo = routerTo;
    this._routerFrom = routerFrom;
  }
}
