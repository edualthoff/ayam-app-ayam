import { PaginationResponse } from './../../../interfaces/base.interface';
import { Produto } from './../../../interfaces/produto.interface';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoRequestService {

  private URIDESTINO = 'produto';

  constructor(protected http: HttpClient) { }

  save(produtoDto: Produto): any {
    return this.http.post('/produto', produtoDto);
  }


  getAllPage(page = 0, size = 10): Observable<PaginationResponse<Produto>> {
    const params = { page: page.toString(), size: size.toString() };
    return this.http.get<PaginationResponse<Produto>>('/produto/todos', { params });
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
    return this.http.get<PaginationResponse<Produto>>(`/${this.URIDESTINO}/caracteristica/${idCaracteristica}`, { params: params2 });
  }

  findParameterNameOrAll(nome = '', page = 0, size = 10, sort = 'asc'): Observable<PaginationResponse<Produto>> {
    const params2 = new HttpParams()
      .set('nome', nome)
      .set('sort', sort)
      .set('page', page.toString())
      .set('size', size.toString())
      .set('getFile', true);
    return this.http.get<PaginationResponse<Produto>>(`/${this.URIDESTINO}/autosuggest`, { params: params2 });
  }

  findById(idProd: string): Observable<Produto> {
    return this.http.get<Produto>(`/${this.URIDESTINO}/${idProd}`);
  }

}
