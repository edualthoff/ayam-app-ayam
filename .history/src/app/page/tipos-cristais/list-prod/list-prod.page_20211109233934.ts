import { SpinnerLoadService } from './../../../shared/components/spinner-load/spinner-load.service';
import { CaracteristicaProduto } from './../../../core/interfaces/caracteristica.interface';
import { Produto } from './../../../core/interfaces/produto.interface';
import { ProdutoRequestService } from './../../../core/services/http/produto/produto-request.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-list-prod',
  templateUrl: './list-prod.page.html',
  styleUrls: ['./list-prod.page.scss'],
})
export class ListProdPage implements OnInit {

  valueOption = '';
  private page = 0;
  private totalPages;
  private guardSelect;
  // produto$ = new BehaviorSubject<Produto[]>(null);
  produto: Produto[] = [];

  constructor(public spinnerLoadService: SpinnerLoadService, private httpProduto: ProdutoRequestService) { }

  ngOnInit() {
    this.mountList(this.valueOption);
  }

  ionViewDidEnter() {
    // this.page = 0;
    console.log("voltou "+this.produto.length)
  }

  private mountList(option: any) {
    this.httpProduto.findParameterNameOrAll(option, this.page).subscribe(x => {
      this.page = this.page + 1;
      this.totalPages = x.totalPages;
      // console.log("aq "+JSON.stringify(x.content))
      this.produto.push(...x.content);
    });
  }
  private mountListPorCaracteristica(option: any) {
    this.httpProduto.findParameterCaracteristicaId(option, this.page).subscribe(x => {
      this.page = this.page + 1;
      this.totalPages = x.totalPages;
      // console.log("aq "+JSON.stringify(x.content))
      this.produto.push(...x.content);
    });
  }

  selectCaracteristicaFiltro(select: CaracteristicaProduto){
    this.page = 0;
    this.produto = [];
    if(this.guardSelect === select.id) {
      this.mountList(this.valueOption);
    } else {
      this.guardSelect = select.id;
      this.mountListPorCaracteristica(select.id);
    }
  }

  buscarPorNomeInput(option: String){
    this.page = 0;
    if(option.length >= 3) {
      this.produto = [];
      this.mountList(option);
    } else if(option.length === 0) {
      this.produto = [];
      this.mountList(this.valueOption);
    }
  }


  /**
  *  Infiniti scroll ionic - logica
  * @param event
  */
  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      // Desabilita o envento do infinit scroll - apoes finalizar
      if (this.totalPages == this.page) {
        event.target.disabled = true;
      } else {
        this.mountList(this.valueOption);
      }
      event.target.complete();
    }, 500);
  }

}
