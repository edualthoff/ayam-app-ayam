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
import { transformStringToArray } from '../../utils/helpers';


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
    const permission = this.transformPermission(routeDataPermissions, route, state);

    if (this.isParameterAvailable(permission.except)) {
      this.auth.passingRouterToAndFrom(permission.routerTo, permission.routerFrom);
      return this.passingExceptPermissionsValidation(permission.except);
    }
    if (this.isParameterAvailable(permission.only)) {
      this.auth.passingRouterToAndFrom(permission.routerTo, permission.routerFrom);
      return this.passingOnlyPermissionsValidation(permission.only);
    }
    return !!this.roles.getRoles();
  }

  private isParameterAvailable(permission: string | string[]) {
    return !!permission && permission.length > 0;
  }

  private transformPermission(permissions: PermissionsRouterData, route: ActivatedRouteSnapshot | Route,
    state?: RouterStateSnapshot) {
    const only = permissions.only ? transformStringToArray(permissions.only) : '' ;
    const except = permissions.except ? transformStringToArray(permissions.except) : '';
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
