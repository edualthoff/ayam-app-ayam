import { CaracteristicaProduto } from './../../../core/interfaces/caracteristica.interface';
import { CaracteristicaRequestService } from './../../../core/services/http/caracteristica/caracteristica-request.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buscar-cristal',
  templateUrl: './buscar-cristal.component.html',
  styleUrls: ['./buscar-cristal.component.scss'],
})
export class BuscarCristalComponent implements OnInit {

  @Output()
  select = new EventEmitter();

  buttonCaract = false;
  caractList: CaracteristicaProduto[] = [];


  constructor(private http: CaracteristicaRequestService) { }

  ngOnInit() {
    this.loadCaracteristica();
  }

  counter(i: number) {
    return new Array(i);
  }

  onClickCarac(select: any) {
    this.select.emit(select);
  }

  private loadCaracteristica() {
    this.http.findAllStatusAtivo().subscribe(x => {
      this.caractList.push(...x);
    });
  }

}
