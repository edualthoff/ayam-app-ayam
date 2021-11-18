import { Injectable } from '@angular/core';
import { BehaviorSubject, timer } from 'rxjs';
import { filter, map, share, switchMap } from 'rxjs/operators';
import { LocalStorageService } from '../../shared/services/storage.service';
import { Token, TokenResponse } from './interface';
import { now } from './helpers';
import { TokenFactory } from './token-factory.service';
import { JwtToken } from './token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private keyToken = 'tk';
  private keyRefresh = 'rf';

  private _token: Token | null = null;
  private _tokenRefresh: Token | null = null;
  private change$ = new BehaviorSubject<boolean>(true);

  constructor(private store: LocalStorageService, private factory: TokenFactory) {}

  set(token: TokenResponse | any) {
    this.setToken(token, true);

    return this;
  }

  refresh(token: TokenResponse | any) {
    this.setToken(token, false);
  }

  clear() {
    this.clearToken();
  }

  changed() {
    return this.change$.pipe(
      filter(changed => changed),
      map(() => this.getToken()),
      share()
    );
  }

  refreshed() {
    return this.change$.pipe(
      filter(() => this.hasRefreshTime()),
      switchMap(() => timer(this.getRefreshTime())),
      filter(() => this.valid()),
      map(() => this.getToken()),
      share()
    );
  }

  valid() {
    return !!this.getToken()?.valid();
  }

  headerValue() {
    return this.getToken()?.headerValue();
  }

  private getToken(): Token | null {
    if (!this.hasToken()) {
      return null;
    }

    if (!this._token) {
      this._token = this.factory.create(this.store.get(this.keyToken));
    }
    return this._token;
  }

  private getRefreshToken(): Token | null {
    if (!this.hasTokenRefresh()) {
      return null;
    }

    if (!this._tokenRefresh) {
      this._tokenRefresh = this.factory.create(this.store.get(this.keyRefresh));
    }
    return this._tokenRefresh;
  }

  /*
  private setToken(token: any, changed = false) {
    this._token = null;
    const accessToken = token.access_token || token.token || '';
    const tokenType = token.token_type || 'bearer';
    const expiresIn = token.expires_in || 0;
    const exp = expiresIn <= 0 ? 0 : now() + expiresIn * 1000;

    this.store.set(this.key, Object.assign({}, token, { accessToken, tokenType, exp }));
    this.change$.next(changed);
  }
 */
  private setToken(token: any, changed = false) {
    this._token = null;
    this._tokenRefresh = null;
    this.mapToken(this.keyToken, token.token, token.tokenType)
    if(token.refreshToken) {
      this.mapToken(this.keyRefresh, token.refreshToken, token.tokenType)
    }
    this.change$.next(changed);
  }

  private mapToken(key: string, token: string, type: string) {
    const accessToken = token || '';
    const tokenType = type || 'bearer';
    //const expiresIn =  0;
    console.log(" token "+JSON.stringify(token))
    console.log("maptoken "+JSON.parse(JwtToken.decode(token.split('.')[1])).exp)
    const exp = JSON.parse(JwtToken.decode(token)).exp || 0;
    this.store.set(key, Object.assign({ accessToken, tokenType, exp }));
  }

  private hasToken() {
    return this.store.has(this.keyToken);
  }

  private hasTokenRefresh() {
    return this.store.has(this.keyRefresh);
  }

  private clearToken() {
    this._token = null;
    this.store.remove(this.keyToken);
    this.store.remove(this.keyRefresh);
    this.change$.next(true);
  }

  private hasRefreshTime() {
    return this.hasToken() && this.getToken()!.exp() > 0;
  }

  private getRefreshTime() {
    return this.getToken()!.refreshTime();
  }
}
