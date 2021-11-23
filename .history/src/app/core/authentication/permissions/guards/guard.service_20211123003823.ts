import { AuthService } from '../../auth.service';
import { Injectable } from '@angular/core';
import { RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  private _routerFrom;
  private set routerFrom(value: string) {
    this._routerFrom = value;
  }
  get routerFrom() {
    return this._routerFrom;
  }
  private _routerTo;
  private set routerTo(value: string) {
    this._routerTo = value;
  }
  get routerTo() {
    return this._routerTo;
  }

  constructor() { }

  passingRouterToAndFrom(routerTo: string, routerFrom: string) {
    this.routerTo = routerTo;
    this.routerFrom = routerFrom;
  }
}
