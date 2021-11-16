import { TokenResponse, User } from './../../../authentication/interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthRequestService {

  private URIDESTINO = 'http://localhost:8282/oauth';

  constructor(protected http: HttpClient) {}

  login(username: string, password: string, grant_type: string) {
    let params = new HttpParams()
    params.set('username', username)
    params.set('password', password)
    params.set('grant_type', grant_type)
    return this.http.post<TokenResponse | any>(`${this.URIDESTINO}`, {params: params });
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