import { TokenService } from './../token/token.service';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, from, Observable, of, Subscription } from 'rxjs';
import { transformStringToArray } from '../utils/helpers';
import { first, map, mergeAll } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AppRolesService implements OnDestroy {

  private rolesSource: BehaviorSubject<string>;
  public roles$: Observable<string>;
  private tokenAssing: Subscription;

  constructor(private tokenService: TokenService) {
    this.rolesSource = new BehaviorSubject<string>('');
    this.tokenAssing = this.rolesToken();
    this.roles$ = this.rolesSource.asObservable();
  }

  ngOnDestroy(): void {
    this.tokenAssing.unsubscribe();
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

  public hasOnlyRoles(names: string | string[]): Promise<boolean> {
    const isNamesEmpty = !names || (Array.isArray(names) && names.length === 0);
    if (isNamesEmpty) {
      return Promise.resolve(true);
    }
    names = transformStringToArray(names);

    return Promise.resolve(this.hasRoleKey(names))
      .then((hasRoles: boolean) => {
        return hasRoles;
      });
  }

  private hasRoleKey(roleName: string[]): Promise<boolean> {
    const promises: Observable<boolean>[] = roleName.map((key) => {
      const hasValidationFunction = !!this.rolesSource.value[key];
      if (hasValidationFunction) {
        return of(true)
      }
      return of(false);
    });
    return from(promises).pipe(
      mergeAll(),
      first((data: any) => data !== false, false),
      map((data) => data !== false)
    ).toPromise().then((data: any) => data);
  }
}

