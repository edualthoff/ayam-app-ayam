import { Usuario } from './../../../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioRequestService {

  private URIDESTINO = 'http://0.0.0.0:8282/oauth';

  constructor(private http: HttpClient) { }

  saveUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.URIDESTINO}/usuario`, usuario);
  }

  recoveryPass(username: string): Observable<any> {
    return this.http.post<any>(`${this.URIDESTINO}/usuario/${username}/recovery`, '');
  }
}
