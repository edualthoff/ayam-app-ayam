import { AuthService } from './../auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlSerializer, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private auth: AuthService, private urlS: UrlSerializer) { }


  authenticate(activated?: ActivatedRouteSnapshot, state?: RouterStateSnapshot, route?: Router): boolean | UrlTree {
    this.auth.state = activated;
    this.auth.router = route;
    console.log("aqui "+route.routerState.snapshot.url)

    console.log("aqui "+activated.parent.toString())
    console.log("aqui 2 "+state.url)
    return this.auth.check();
  }

}
