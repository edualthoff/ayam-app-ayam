import { TokenResponse, User } from './../../../authentication/interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthRequestService {

  constructor(protected http: HttpClient) {}

  login(email: string, password: string, rememberMe = false) {
    return this.http.post<TokenResponse | any>('/auth/login', {
      email,
      password,
      remember_me: rememberMe,
    });
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
