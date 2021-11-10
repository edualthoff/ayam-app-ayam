import { PaginationResponse } from './../../../interfaces/base.interface';
import { CaracteristicaProduto } from './../../../interfaces/caracteristica.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaracteristicaRequestService {

  private URIDESTINO = 'caracteristica';

  constructor(private http: HttpClient) { }

  /**  Buscar Tipo Paginacao
   * @param nome
   * @param sort
   * @param page
   * @param size
   * @returns
   */
  findParameterNameOrAll(nome = '', sort = 'asc', page = 0, size = 10): Observable<PaginationResponse<CaracteristicaProduto>> {
    const params2 = new HttpParams()
      .set('nome', nome)
      .set('sort', sort)
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get<PaginationResponse<CaracteristicaProduto>>(`/${this.URIDESTINO}`, { params: params2 });
  }
  /**  Buscar Tipo Paginacao - Por caracteristica
 * @param idCaracteristica
 * @param sort
 * @param page
 * @param size
 * @returns
 */
  findParameterCaracteristicaId(idCaracteristica, sort = 'asc', page = 0, size = 10): Observable<PaginationResponse<CaracteristicaProduto>> {
    const params2 = new HttpParams()
      .set('sort', sort)
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get<PaginationResponse<CaracteristicaProduto>>(`/${this.URIDESTINO}/caracteristica/${idCaracteristica}`, { params: params2 });
  }

  /** buscar por id */
  findById(idCaract: string): Observable<CaracteristicaProduto> {
    return this.http.get<CaracteristicaProduto>(`/${this.URIDESTINO}/${idCaract}`);
  }

  /** Buscar por status ativo */
  findAllStatusAtivo(): Observable<CaracteristicaProduto[]> {
    return this.http.get<CaracteristicaProduto[]>(`/${this.URIDESTINO}/status/ativo`);
  }

}
