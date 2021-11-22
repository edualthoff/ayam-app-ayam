import { TokenService } from './../token/token.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Unsubscribable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AppRolesService {

  private rolesSource: BehaviorSubject<String>;
  public roles$: Observable<String>;
  private tokenAssing: Unsubscribable;

  constructor(private tokenService: TokenService) {
    this.roles$ = this.rolesSource.asObservable();
    this.tokenService = this.rolesToken();
  }

  public addRole(name: string) {
    const roles = {
      ...this.rolesSource.value,
      [name]: { name }
    };
    this.rolesSource.next(roles);
  }

  public addRoles(roles: string[]) {
    roles.forEach(x => {
      this.addRole(x);
    })
  }

  private rolesToken() {
    return this.tokenService.changed().subscribe(x => {
      this.addRoles(x.roles());
    });
  }

  public getRoles() {
    return this.rolesSource.value;
}

  public getRole(name: string) {
    return this.rolesSource.value[name];
  }

}
