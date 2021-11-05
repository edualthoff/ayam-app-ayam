import { InformativoRequestService } from './../../../core/services/http/informativo/informativo-request.service';
import { Informativo } from 'src/app/core/interfaces/informativo.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, Observable } from 'rxjs';
import { distinct, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-list-info',
  templateUrl: './list-info.page.html',
  styleUrls: ['./list-info.page.scss'],
})
export class ListInfoPage implements OnInit {

  infoAll: Informativo[] = [];
  infoAllObs: Observable<Informativo[]>;
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

  listaInformativo(tipo: string = '') {
    console.log("vv res inico - "+this.infoAll.length)
    this.httpInfo.findParameterNameOrAll('', tipo, 'asc', this.page, this.size).pipe(tap(pp => {
      pp.content.push(...this.infoAll)
    })
    ).subscribe(x => {
      from(x.content).pipe(distinct(), map(x => {this.infoAll.push(x)}))
    });
  }


  ionChangeOption(){
    from(this.infoAll)
    this.listaInformativo(this.valueOption);
    console.log("log  "+this.valueOption);
  }
}
