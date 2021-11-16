import { Usuario } from './../../../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioRequestService {

  private URIDESTINO = 'usuario';

  constructor(private http: HttpClient) { }

  saveUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`/oauth/${this.URIDESTINO}`, usuario);
  }
}
