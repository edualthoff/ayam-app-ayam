import { AuthService } from './../auth.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log("aqui "+route.component)
    console.log("aqui 2 "+state.url)
    return this.authenticate(state);
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    console.log("aqui "+state.url)

    return this.authenticate(state);
  }

  private authenticate(state: RouterStateSnapshot): boolean | UrlTree {
    this.auth.stateRoute(state);
    return this.auth.check() ? true : this.router.parseUrl('/auth/login');
  }
}
