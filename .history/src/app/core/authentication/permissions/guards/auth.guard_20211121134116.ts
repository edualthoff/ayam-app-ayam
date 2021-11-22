import { PermissionsRouterData } from './../../interface';
import { GuardService } from './guard.service';
import { AuthService } from '../../auth.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Route,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';


export interface PermissionsData {
  only?: string | string[];
  except?: string | string[];
  redirectTo?: string;
  redirectFrom?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {

  private routerLogin = '/auth/login';

  constructor(private auth: GuardService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authenticate(route, state);
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    return this.authenticate(childRoute, state);
  }

  private authenticate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    return this.auth.authenticate(state, this.router.routerState.snapshot) ? true : this.router.parseUrl('/auth/login');
  }

  private hasPermissions(route: ActivatedRouteSnapshot | Route, state?: RouterStateSnapshot) {
    const routeDataPermissions = !!route && route.data ? (route.data.permissions as PermissionsRouterData) : {};

    if (routeDataPermissions.)
  }

  private isParameterAvailable(permission: string | string[]) {
    return !!permission && permission.length > 0;
}
}
