import { PaginationResponse } from './../../../interfaces/base.interface';
import { CaracteristicaProduto } from './../../../interfaces/caracteristica.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaracteristicaRequestService {

  constructor(protected http: HttpClient) {  }

  save(caract: CaracteristicaProduto): any {
    return this.http.post('/caracteristica', caract);
  }
  update(caract: CaracteristicaProduto): any {
    return this.http.put('/caracteristica', caract);
  }
  getAllPages(page: number = 0, size: number = 10): Observable<PaginationResponse<CaracteristicaProduto>> {
    const params = { page: page.toString(), size: size.toString()};
    return this.http.get<PaginationResponse<CaracteristicaProduto>>('/caracteristica/todos', {params});
  }

  getTipoAllPages(page: number = 0, size: number = 10, tipo: string): Observable<PaginationResponse<CaracteristicaProduto>> {
    const params = { page: page.toString(), size: size.toString()};
    return this.http.get<PaginationResponse<CaracteristicaProduto>>(`/caracteristica/${tipo}/todos`, {params});
  }

  findParameterNameOrAll(nome = '', sort = 'asc', page = 0, size = 10): Observable<PaginationResponse<CaracteristicaProduto>>  {
    const params2 = new HttpParams()
    .set('nome', nome)
    .set('sort', sort)
    .set('page', page.toString())
    .set('size', size.toString());
    return this.http.get<PaginationResponse<CaracteristicaProduto>>('/caracteristica', { params: params2 });
  }

  findById(idCaract: string): Observable<CaracteristicaProduto> {
    return this.http.get<CaracteristicaProduto>(`/caracteristica/${idCaract}`);
  }

  delete(index: number) {
    return this.http.delete(`/caracteristica/${index}`);
  }
}
