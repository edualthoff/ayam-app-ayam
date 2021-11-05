import { CaracteristicaProduto } from './../../../core/interfaces/caracteristica.interface';
import { Produto } from './../../../core/interfaces/produto.interface';
import { ProdutoRequestService } from './../../../core/services/http/produto/produto-request.service';
import { Component, OnInit } from '@angular/core';

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
  size = 10;
  private totalPages;

  constructor(public produtoRequestService: ProdutoRequestService) { }

  ngOnInit() {
  }

  private mountList(option: any) {

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
