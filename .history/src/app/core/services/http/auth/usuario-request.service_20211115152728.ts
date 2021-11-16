import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioRequestService {

  private URIDESTINO = 'usuario';

  constructor(private http: HttpClient) { }

}
