import { PaginationResponse } from './../../../interfaces/base.interface';
import { Informativo } from './../../../interfaces/informativo.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InformativoRequestService {

  constructor(protected http: HttpClient) {  }

  save(informativo: Informativo): any {
    return this.http.post('/informativo/', informativo);
  }

  saveAndFile(informativo: Informativo, file: File[]): Observable<any> {
    const myheader = new HttpHeaders().set('Accept', 'application/json');
    const f = new FormData();
    console.log("save "+ file.length);
    f.append('informativo', JSON.stringify(informativo));
    file.forEach( (x: File) => {
      f.append('file', x);
    });
    return this.http.post('/informativo', f, {
      headers: myheader,
      reportProgress: true,
      responseType: 'json'
    });
  }
  updateAndFile(informativo: Informativo, file: File[]): Observable<any> {
    const myheader = new HttpHeaders().set('Accept', 'application/json');
    const f = new FormData();
    f.append('informativo', JSON.stringify(informativo));
    file.forEach( (x: File) => {
        f.append('file', x);
    });
    return this.http.put('/informativo', f, {
      headers: myheader,
      reportProgress: true,
      responseType: 'json'
    });
  }

  update(caract: Informativo): any {
    return this.http.put('/informativo', caract);
  }

  findParameterNameOrAll(nome = '', sort = 'asc', page = 0, size = 10): Observable<PaginationResponse<InformativoDto>>  {
    const params2 = new HttpParams()
    .set('nome', nome)
    .set('sort', sort)
    .set('page', page.toString())
    .set('size', size.toString());
    return this.http.get<PaginationResponse<Informativo>>('/informativo', { params: params2 });
  }

  findById(infoId: number): Observable<Informativo> {
    return this.http.get<Informativo>(`/informativo/${infoId}`);
  }

  findByTipoAndAtivo(infoTipo: string): Observable<Informativo> {
    return this.http.get<Informativo>(`/informativo/${infoTipo}/destaque/ativo`);
  }

  delete(index: number): any {
    return this.http.delete(`/informativo/${index}`);
  }
}
