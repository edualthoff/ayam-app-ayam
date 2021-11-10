import { Produto } from './../../../core/interfaces/produto.interface';
import { Observable } from 'rxjs';
import { SpinnerLoadService } from './../../../shared/components/spinner-load/spinner-load.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoRequestService } from 'src/app/core/services/http/produto/produto-request.service';

@Component({
  selector: 'app-cristal-descricao',
  templateUrl: './cristal-descricao.component.html',
  styleUrls: ['./cristal-descricao.component.css']
})
export class CristalDescricaoComponent implements OnInit {

  prod$: Observable<Produto>;

  constructor(public spinnerLoadService: SpinnerLoadService, private routeSnap: ActivatedRoute, private httpProd: ProdutoRequestService) { }

  ngOnInit(): void {
    this.spinnerLoadService.show();
    this.prod$ = this.httpProd.findById(this.routeSnap.snapshot.params['id']);
  }

}
