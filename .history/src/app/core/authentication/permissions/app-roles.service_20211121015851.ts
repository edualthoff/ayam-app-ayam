import { TokenService } from './../token/token.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AppRolesService {

  private rolesSource: BehaviorSubject<String>;
  public roles$: Observable<String>;

  constructor(private tokenService: TokenService) { }

  public addRole(name: string) {
    const roles = {
      ...this.rolesSource.value,
      [name]: { name }
    };
    this.rolesSource.next(roles);
  }

  public addRoles(rolesObj: { [name: string]: string[] }) {
    Object.keys(rolesObj).forEach((key) => {
        this.addRole(key);
    });
  }

  rolesToken() {

  }
}
