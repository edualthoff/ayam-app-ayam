import { BASE_AUTH_URL } from './../../../interceptors/base-url-interceptor';
import { Usuario } from './../../../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioRequestService {

  private URIDESTINO = '';

  constructor(private http: HttpClient, @Inject(BASE_AUTH_URL) private baseAuthUrl?: string) {
    this.URIDESTINO = baseAuthUrl;
   }

  saveUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.URIDESTINO}/usuario`, usuario);
  }

  recoveryPass(username: string): Observable<any> {
    return this.http.post<any>(`${this.URIDESTINO}/usuario/${username}/recovery`, '');
  }
}
