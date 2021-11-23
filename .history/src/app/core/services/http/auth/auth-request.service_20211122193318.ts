import { BASE_AUTH_URL } from './../../../interceptors/base-url-interceptor';
import { Pessoa } from './../../../interfaces/user.interface';
import { TokenResponse } from '../../../authentication/token/token.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthRequestService {

  private URIDESTINO = '';

  constructor(private http: HttpClient, @Inject(BASE_AUTH_URL) private baseAuthUrl?: string) {
    this.URIDESTINO = this.baseAuthUrl;
   }

  login(username: string, password: string, grantType: string) {
    const params = new HttpParams()
    .set('username', username.toString())
    .set('password', password.toString())
    .set('grant_type', grantType.toString());
    return this.http.post<TokenResponse | any>(`${this.URIDESTINO}`, '', {params: params});
  }

  refresh(tokenRefresh: string) {
    const params = new HttpParams()
    .set('rf', tokenRefresh.toString());
    return this.http.post<TokenResponse | any>(`${this.URIDESTINO}/refresh`, '', {params: params});
  }

  logout(tokenRefresh: string) {
    const params = new HttpParams()
    .set('rf', tokenRefresh.toString());
    return this.http.post<TokenResponse | any>(`${this.URIDESTINO}/logout`, '', {params: params});
  }

  me() {
    return this.http.get<Pessoa>('/me');
  }

  menu() {
    return this.http.get('/me/menu');
  }
}
