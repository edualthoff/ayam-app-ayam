import { AuthService } from './../auth.service';
import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private auth: AuthService) { }


  authenticate(state: RouterStateSnapshot = null, route: Router = null): boolean | UrlTree {
    this.auth.stateRoute(state);
    return this.auth.check();
  }

}
