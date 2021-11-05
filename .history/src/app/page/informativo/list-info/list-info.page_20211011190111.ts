import { SpinnerLoadService } from './../../../shared/components/spinner-load/spinner-load.service';
import { InformativoRequestService } from './../../../core/services/http/informativo/informativo-request.service';
import { Informativo } from 'src/app/core/interfaces/informativo.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, Observable } from 'rxjs';
import { debounceTime, distinct, distinctUntilKeyChanged, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-list-info',
  templateUrl: './list-info.page.html',
  styleUrls: ['./list-info.page.scss'],
})
export class ListInfoPage implements OnInit {

  infoAll: Informativo[] = [];
  valueOption = '';
  page = 0;
  size = 10;

  constructor(public spinnerLoadService: SpinnerLoadService, private routeSnap: ActivatedRoute, private httpInfo: InformativoRequestService) { }

  ngOnInit() {
    if(this.routeSnap.snapshot.queryParams['tipo'] ) {
      this.listaInformativo(this.routeSnap.snapshot.queryParams['tipo']);
      this.valueOption = this.routeSnap.snapshot.queryParams['tipo'];
    } else {
      this.listaInformativo();
    }
  }

  listaInformativo(tipo: string = '') {
    this.infoAll = [];
    console.log("vv res inico - "+this.infoAll.length)
    this.spinnerLoadService.show();
    this.httpInfo.findParameterNameOrAll('', tipo, 'asc', this.page, this.size).pipe(debounceTime(10000),tap(pp => {
      this.infoAll.push(...pp.content);
      this.spinnerLoadService.hide();
    })
    ).subscribe();
  }


  ionChangeOption(){
    this.listaInformativo(this.valueOption);
  }
}
