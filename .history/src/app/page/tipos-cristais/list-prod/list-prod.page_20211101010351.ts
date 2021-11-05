import { SpinnerLoadService } from './../../../shared/components/spinner-load/spinner-load.service';
import { CaracteristicaProduto } from './../../../core/interfaces/caracteristica.interface';
import { Produto } from './../../../core/interfaces/produto.interface';
import { ProdutoRequestService } from './../../../core/services/http/produto/produto-request.service';
import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-list-prod',
  templateUrl: './list-prod.page.html',
  styleUrls: ['./list-prod.page.scss'],
})
export class ListProdPage implements OnInit {

  caracll: CaracteristicaProduto[] = [];
  prodll: Produto[] = [];
  valueOption = '';
  page = 0;
  private totalPages;
  produto$ = new Observable<Produto[]>();

  constructor(public spinnerLoadService: SpinnerLoadService, private httpProduto: ProdutoRequestService) { }

  ngOnInit() {
  }

  private mountList(option: any) {
    return this.httpProduto.findParameterNameOrAll(option, this.page);
  }
  /**
 *  Infiniti scro ionic - logica
 * @param event
 */
  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.totalPages == this.page) {
        //event.target.disabled = true;
      } else {
        this.mountList(this.valueOption);
      }
      event.target.complete();
    }, 500);
  }

}
