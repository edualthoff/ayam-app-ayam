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
import { notUndefinedOrNull, transformStringToArray } from '../../../utils/helpers';


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
    this.auth.passingRouterToAndFrom(permission.routerTo, permission.routerFrom);

    if (this.roles.getRoles() == null) {
      return this.redirectToAnotherRoute();
    }
    if (this.isParameterAvailable(permission.except)) {
      return this.passingExceptPermissionsValidation(permission.except);
    }
    if (this.isParameterAvailable(permission.only)) {
      return this.passingOnlyPermissionsValidation(permission.only);
    }
    return this.permissionsValidation();
  }

  private isParameterAvailable(permission: string | string[]) {
    return !!permission && permission.length > 0;
  }

  private transformPermission(permissions: PermissionsRouterData, route: ActivatedRouteSnapshot | Route,
    state?: RouterStateSnapshot) {
    const only = notUndefinedOrNull(permissions?.only) ? transformStringToArray(permissions.only) : '';
    const except = notUndefinedOrNull(permissions?.except) ? transformStringToArray(permissions.except) : '';
    const routerTo = state.url;
    const routerFrom = this.router.routerState.snapshot.url;
    return { only, except, routerTo, routerFrom }
  }

  private passingExceptPermissionsValidation(roles: string | string[]) {
    return this.validFromRedirect(!this.roleValidation(roles));
  }

  private passingOnlyPermissionsValidation(roles: string | string[]): Promise<boolean> {
    return this.validFromRedirect(!!this.roleValidation(roles));
  }

  private permissionsValidation(): Promise<boolean> {
    return this.validFromRedirect(!!this.roles.roles$);
  }

  private roleValidation(roles: string | string[]): Promise<boolean> {
    return this.roles.hasOnlyRoles(roles).then(x => { return x });
  }

  private validFromRedirect(value: boolean): Promise<boolean> {
    return Promise.resolve().then(x => {
      if (!value) {
        return this.redirectToAnotherRoute();
      }
      return true;
    })
  }
  private redirectToAnotherRoute(): boolean {
    if (!this.roles.roles$) {
      this.router.navigateByUrl(this.router.routerState.snapshot.url)
      return false
    }
    this.router.navigateByUrl(this.routerLogin);
    return false;
  }
}
