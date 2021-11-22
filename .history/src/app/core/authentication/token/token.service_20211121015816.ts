import { LocalStorageService } from './../../../shared/services/storage.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, timer } from 'rxjs';
import { filter, map, share, switchMap } from 'rxjs/operators';
import { Token, TokenResponse, UserPayload } from './token.interface';
import { TokenFactory } from './token-factory.service';
import { JwtToken } from './token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  // chave token principal
  private keyToken = 'tk';
  // chave token refresh
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
  /** Roles de acesso no sistema */
  getRoles() {
    return this.getToken()?.roles();
  }

  /** Informacoes contida no token do usuario */
  userPayload(): UserPayload {
    return this.getToken()?.userPayload();
  }

  /** Id do usuario */
  sub() {
    return this.getToken()?.sub();
  }

  valid(): boolean {
    return !!this.getToken()?.valid();
  }

  validRefresh(): boolean {
    return !!this.getRefreshToken()?.valid();
  }

  /** Mounta o token com bearer para enviar no header */
  headerValue() {
    return this.getToken()?.headerValue();
  }
  /** Mounta o token - refresh - com bearer para enviar no header */
  refreshValue(): string {
    return this.getRefreshToken().accessToken();
  }

  /** Token princiapl recuperar dados */
  private getToken(): Token | null {
    if (!this.hasToken()) {
      return null;
    }

    if (!this._token) {
      this._token = this.factory.create(this.store.get(this.keyToken));
    }
    return this._token;
  }

  /** Token de atualizacao Refresh */
  private getRefreshToken(): Token | null {
    if (!this.hasTokenRefresh()) {
      return null;
    }
    if (!this._tokenRefresh) {
      this._tokenRefresh = this.factory.create(this.store.get(this.keyRefresh));
    }
    return this._tokenRefresh;
  }

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
    const exp = JSON.parse(JwtToken.decode(token.split('.')[1])).exp || 0;
    this.store.set(key, Object.assign({ accessToken, tokenType, exp }));
  }

  private hasToken() {
    return this.store.has(this.keyToken);
  }

  private hasTokenRefresh() {
    return this.store.has(this.keyRefresh);
  }

  private clearToken() {
    console.log("aqui close token")
    this._token = null;
    this._tokenRefresh = null;
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
