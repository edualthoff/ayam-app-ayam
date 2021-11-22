import { AppRolesService } from './../app-roles.service';
import { PermissionsRouterData } from './../permissions.interface';
import { GuardService } from './guard.service';
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
import { notUndefined, transformStringToArray } from '../../utils/helpers';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {

  private routerLogin = '/auth/login';

  constructor(private auth: GuardService, private roles: AppRolesService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
    return this.hasPermissions(route, state);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.hasPermissions(childRoute, state);
  }

  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    return this.hasPermissions(route);
  }

  /*
  private authenticate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    return this.auth.authenticate(state, this.router.routerState.snapshot) ? true : this.router.parseUrl('/auth/login');
  }*/

  private hasPermissions(route: ActivatedRouteSnapshot | Route, state?: RouterStateSnapshot) {
    const routeDataPermissions = !!route && route.data ? (route.data.permissions as PermissionsRouterData) : {};
    console.log("aq "+ JSON.stringify(routeDataPermissions.only))

    const permission = this.transformPermission(routeDataPermissions, route, state);
    console.log("aq "+ JSON.stringify(permission))

    if (this.isParameterAvailable(permission.except)) {
      console.log("aq token except")

      this.auth.passingRouterToAndFrom(permission.routerTo, permission.routerFrom);
      return this.passingExceptPermissionsValidation(permission.except);
    }
    if (this.isParameterAvailable(permission.only)) {
      console.log("aq token only "+ JSON.stringify(!!this.passingOnlyPermissionsValidation(permission.only).then()) )

      this.auth.passingRouterToAndFrom(permission.routerTo, permission.routerFrom);
      return this.passingOnlyPermissionsValidation(permission.only);
    }
    console.log("aq token")

    return !!this.roles.getRoles();
  }

  private isParameterAvailable(permission: string | string[]) {
    console.log("aq isParameterAvailable "+(!!permission && permission.length > 0))

    return !!permission && permission.length > 0;
  }

  private transformPermission(permissions: PermissionsRouterData, route: ActivatedRouteSnapshot | Route,
    state?: RouterStateSnapshot) {
      console.log("aq "+ JSON.stringify(permissions))
    const only = notUndefined(permissions?.only) ? transformStringToArray(permissions.only) : '' ;
    const except = notUndefined(permissions?.except) ? transformStringToArray(permissions.except) : '';
    const routerTo = state.url;
    const routerFrom = this.router.routerState.snapshot.url;
    return { only, except, routerTo, routerFrom }
  }

  private passingExceptPermissionsValidation(roles: string | string[]) {
    return !this.roleValidation(roles);
  }

  private passingOnlyPermissionsValidation(roles: string | string[]) {
    return this.roleValidation(roles);
  }

  private roleValidation(roles: string | string[]): Promise<boolean> {
    return this.roles.hasOnlyRoles(roles).then(x => { return x });
  }
}
