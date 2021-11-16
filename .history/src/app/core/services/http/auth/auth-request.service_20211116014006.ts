import { TokenResponse, User } from './../../../authentication/interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthRequestService {

  private URIDESTINO = 'http://localhost:8282/oauth';

  constructor(protected http: HttpClient) {}

  login(username: string, password: string, grantType: string) {
    const params = new HttpParams()
    .set('username', username.toString())
    .set('password', password.toString())
    .set('grant_type', grantType.toString());
    console.log("aqui auth parm "+params.toString())
    return this.http.post<TokenResponse | any>(`${this.URIDESTINO}`, '', {params: params});
  }

  refresh() {
    return this.http.post<TokenResponse | any>('/auth/refresh', {});
  }

  logout() {
    return this.http.post('/auth/logout', {});
  }

  me() {
    return this.http.get<User>('/me');
  }

  menu() {
    return this.http.get('/me/menu');
  }
}
