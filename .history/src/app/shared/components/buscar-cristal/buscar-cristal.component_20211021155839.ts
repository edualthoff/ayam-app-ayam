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
  page = 0;
  private totalPages;
  caractList: CaracteristicaProduto[] = [];

  constructor(private http: CaracteristicaRequestService) { }

  ngOnInit() {
    this.loadNewsCaracteristica(this.page);
  }

  counter(i: number) {
    return new Array(i);
  }

  onClickCarac() {

  }

  private loadNewsCaracteristica(page) {
    this.http.getAllPages(page).pipe(tap(x => {
      this.caractList.push(...x.content);
      this.totalPages = x.totalPages;
      this.page = page + 1;
    })).subscribe();
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.totalPages == this.page) {
        console.log('Done3');
        //event.target.disabled = true;
      } else {
        console.log('Done4');
        this.loadNewsCaracteristica(this.page);
      }
      //event.target.complete();
    }, 500);
  }

}
