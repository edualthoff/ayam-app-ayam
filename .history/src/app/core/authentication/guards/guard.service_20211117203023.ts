import { AuthService } from './../auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlSerializer, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private auth: AuthService, private urlS: UrlSerializer) { }


  authenticate(state?: RouterStateSnapshot, stateCurrent?: RouterStateSnapshot): boolean | UrlTree {
    this.auth.state = activated;
    this.auth.router = route;
    console.log("aqui 2 "+state.root.toString())
    return this.auth.check();
  }

}
