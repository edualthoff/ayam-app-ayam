import { TokenService } from './../token/token.service';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, Unsubscribable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AppRolesService implements OnDestroy {

  private rolesSource: BehaviorSubject<String>;
  public roles$: Observable<String>;
  private tokenAssing: Subscription;

  constructor(private tokenService: TokenService) {
    this.roles$ = this.rolesSource.asObservable();
    this.tokenAssing = this.rolesToken();
  }

  ngOnDestroy(): void {
    this.tokenAssing;
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
    this.flush();
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

  public flush() {
    this.rolesSource.next(null);
  }
}
