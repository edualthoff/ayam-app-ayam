import { AuthService } from './../auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private auth: AuthService) { }


  authenticate(state?: ActivatedRouteSnapshot, route?: Router): boolean | UrlTree {
    this.auth.state = state;
    this.auth.router = route;
    console.log("aqui "+route.url)
    console.log("aqui 2 "+state.root.parent.routeConfig)
    return this.auth.check();
  }

}
