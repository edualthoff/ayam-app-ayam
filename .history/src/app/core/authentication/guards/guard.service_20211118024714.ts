import { AuthService } from './../auth.service';
import { Injectable } from '@angular/core';
import { RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private auth: AuthService) { }


  authenticate(state?: RouterStateSnapshot, stateCurrent?: RouterStateSnapshot): boolean | UrlTree {
    this.auth.state = state;
    this.auth.stateCurrent = stateCurrent;
    return this.auth.check();
  }

}
