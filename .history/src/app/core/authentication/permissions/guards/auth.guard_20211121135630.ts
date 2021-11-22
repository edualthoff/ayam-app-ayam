import { PermissionsRouterData } from './../permissions.interface';
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
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {

  private routerLogin = '/auth/login';

  constructor(private auth: GuardService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
    return this.hasPermissions(route, state);
}

canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.hasPermissions(childRoute, state);
}

canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    return this.hasPermissions(route);
}

  private authenticate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    return this.auth.authenticate(state, this.router.routerState.snapshot) ? true : this.router.parseUrl('/auth/login');
  }

  private hasPermissions(route: ActivatedRouteSnapshot | Route, state?: RouterStateSnapshot) {
    const routeDataPermissions = !!route && route.data ? (route.data.permissions as PermissionsRouterData) : {};

    const permission = this.transformPermission(routeDataPermissions, route, state);
    if (routeDataPermissions) {

    }
    return true;
  }

  private isParameterAvailable(permission: string | string[]) {
    return !!permission && permission.length > 0;
  }

  private transformPermission( permissions: PermissionsRouterData, route: ActivatedRouteSnapshot | Route,
    state?: RouterStateSnapshot) {
      const only = permissions.only;
      const except = permissions.except;
      const routerTo = state.url;
      const routerFrom = this.router.routerState.snapshot.url;
      return {only, except, routerTo, routerFrom}
  }
}
