import { InformativoRequestService } from './../../../core/services/http/informativo/informativo-request.service';
import { Informativo } from 'src/app/core/interfaces/informativo.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-list-info',
  templateUrl: './list-info.page.html',
  styleUrls: ['./list-info.page.scss'],
})
export class ListInfoPage implements OnInit {

  infoAll: Array<Informativo> = [];
  infoAllSet = new Set<Informativo>();
  valueOption = '';
  page = 0;
  size = 10;

  constructor(private routeSnap: ActivatedRoute, private httpInfo: InformativoRequestService) { }

  ngOnInit() {
    if(this.routeSnap.snapshot.queryParams['tipo'] ) {
      this.listaInformativo(this.routeSnap.snapshot.queryParams['tipo']);
      this.valueOption = this.routeSnap.snapshot.queryParams['tipo'];
    } else {
      this.listaInformativo();
    }
  }

  listaInformativo2(tipo: string = '') {
    this.httpInfo.findParameterNameOrAll('', tipo, 'asc', this.page, this.size)
    .pipe(map(x => {
      if(this.infoAll.length > 0)

        x.content.filter(x => x.id === this.infoAll.values().next().value.id)
      },
    )).subscribe((x) => {this.infoAll.push(...x.content)},);
  }

  listaInformativo(tipo: string = '') {
    this.httpInfo.findParameterNameOrAll('', tipo, 'asc', this.page, this.size)
      .subscribe((x) => {
        this.infoAll.forEach(result => {
          x.content.filter(x => x.id === result.id)
        })
        this.infoAll.push(...x.content)
      });
  }

  ionChangeOption(){
    this.listaInformativo(this.valueOption);
    console.log("log  "+this.valueOption);
  }
}
