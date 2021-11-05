import { InformativoRequestService } from './../../../core/services/http/informativo/informativo-request.service';
import { Informativo } from 'src/app/core/interfaces/informativo.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

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
    this.httpInfo.findParameterNameOrAll('', tipo, 'asc', this.page, this.size).pipe(map(pp => {
      let var2 = [];
      this.infoAll.map(x => {
        console.log("vv - "+x.id+" e "+var2.length+" "+this.infoAll.length)
        var2 = pp.content.filter(n => n.id == x.id)
        console.log("vv new - "+x.id+" e "+var2.length+" "+this.infoAll.length)

      })
      if(this.infoAll.length != 0){
      } else { var2 = x.content }
      console.log("vv - "+x.content.length+" e "+var2.length)
      this.infoAll.push(...var2);
      })
    ).subscribe();
  }


  ionChangeOption(){
    from(this.infoAll)
    this.listaInformativo(this.valueOption);
    console.log("log  "+this.valueOption);
  }
}
