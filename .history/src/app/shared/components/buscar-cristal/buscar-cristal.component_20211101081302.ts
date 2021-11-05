import { CaracteristicaProduto } from './../../../core/interfaces/caracteristica.interface';
import { CaracteristicaRequestService } from './../../../core/services/http/caracteristica/caracteristica-request.service';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-buscar-cristal',
  templateUrl: './buscar-cristal.component.html',
  styleUrls: ['./buscar-cristal.component.scss'],
})
export class BuscarCristalComponent implements OnInit {

  buttonCaract = false;
  caractList: CaracteristicaProduto[] = [];


  constructor(private http: CaracteristicaRequestService) { }

  ngOnInit() {
    this.loadCaracteristica();
  }

  counter(i: number) {
    return new Array(i);
  }

  onClickCarac() {

  }

  private loadCaracteristica() {
    this.http.findAllStatusAtivo().subscribe(x => {
      this.caractList.push(...x);
    });
  }

}
