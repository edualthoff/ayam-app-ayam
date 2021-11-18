import { AuthService } from './../auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private auth: AuthService) { }


  authenticate(activated?: ActivatedRouteSnapshot, state?: RouterStateSnapshot, route?: Router): boolean | UrlTree {
    this.auth.state = activated;
    this.auth.router = route;
    console.log("aqui "+route.routerState.snapshot.url)
    console.log("aqui "+state.root.routeConfig.path)
    console.log("aqui 2 "+activated.routeConfig.path)
    return this.auth.check();
  }

}
