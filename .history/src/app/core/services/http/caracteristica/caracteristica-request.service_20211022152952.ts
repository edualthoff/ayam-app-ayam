import { PaginationResponse } from './../../../interfaces/base.interface';
import { CaracteristicaProduto } from './../../../interfaces/caracteristica.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaracteristicaRequestService {

  private URIDESTINO = '/caracteristica';

  constructor(protected http: HttpClient) {  }

  save(caract: CaracteristicaProduto): any {
    return this.http.post(`${this.URIDESTINO}`, caract);
  }
  update(caract: CaracteristicaProduto): any {
    return this.http.put(`${this.URIDESTINO}`, caract);
  }
  getAllPages(page: number = 0, size: number = 10): Observable<PaginationResponse<CaracteristicaProduto>> {
    const params = { page: page.toString(), size: size.toString()};
    return this.http.get<PaginationResponse<CaracteristicaProduto>>(`${this.URIDESTINO}/todos`, {params});
  }

  getTipoAllPages(page: number = 0, size: number = 10, tipo: string): Observable<PaginationResponse<CaracteristicaProduto>> {
    const params = { page: page.toString(), size: size.toString()};
    return this.http.get<PaginationResponse<CaracteristicaProduto>>(`${this.URIDESTINO}/${tipo}/todos`, {params});
  }

  findParameterNameOrAll(nome = '', sort = 'asc', page = 0, size = 10): Observable<PaginationResponse<CaracteristicaProduto>>  {
    const params2 = new HttpParams()
    .set('nome', nome)
    .set('sort', sort)
    .set('page', page.toString())
    .set('size', size.toString());
    return this.http.get<PaginationResponse<CaracteristicaProduto>>(`${this.URIDESTINO}`, { params: params2 });
  }

  findById(idCaract: string): Observable<CaracteristicaProduto> {
    return this.http.get<CaracteristicaProduto>(`${this.URIDESTINO}/${idCaract}`);
  }

  findAllStatusAtivo(idCaract: string): Observable<CaracteristicaProduto[]> {
    return this.http.get<CaracteristicaProduto[]>(`${this.URIDESTINO}/status/ativo/all`);
  }

  delete(index: number) {
    return this.http.delete(`${this.URIDESTINO}/${index}`);
  }
}
