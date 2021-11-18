import { GuardService } from './guard.service';
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
  constructor(private auth: GuardService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log("aqui "+this.router.url)
    console.log("aqui "+route.root)
    console.log("aqui 2 "+state.url)
    return this.authenticate(state);
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    return this.authenticate(state);
  }

  private authenticate(state: RouterStateSnapshot): boolean | UrlTree {
    return this.auth.authenticate(state, this.router) ? true : this.router.parseUrl('/auth/login');
  }
}
