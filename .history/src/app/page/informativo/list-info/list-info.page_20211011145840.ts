import { InformativoRequestService } from './../../../core/services/http/informativo/informativo-request.service';
import { Informativo } from 'src/app/core/interfaces/informativo.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-list-info',
  templateUrl: './list-info.page.html',
  styleUrls: ['./list-info.page.scss'],
})
export class ListInfoPage implements OnInit {

  infoAll: Informativo[] = [];

  constructor(private routeSnap: ActivatedRoute, private httpInfo: InformativoRequestService) { }

  ngOnInit() {
    if(this.routeSnap.snapshot.queryParams['tipo'] ) {
      console.log("log "+    this.routeSnap.snapshot.queryParams['tipo'])
    }
    this.listaInformativo();
  }

  listaInformativo() {
    this.httpInfo.findParameterNameOrAll()
    .pipe(tap(x => {
      console.log("value x "+JSON.stringify(x))
      this.infoAll.concat(x.content);
    })).subscribe();
    console.log("value "+JSON.stringify(this.infoAll.length))
  }

}
