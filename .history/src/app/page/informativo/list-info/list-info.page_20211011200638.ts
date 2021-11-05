import { SpinnerLoadService } from './../../../shared/components/spinner-load/spinner-load.service';
import { InformativoRequestService } from './../../../core/services/http/informativo/informativo-request.service';
import { Informativo } from 'src/app/core/interfaces/informativo.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';


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
  private totalPages;
  constructor(public spinnerLoadService: SpinnerLoadService, private routeSnap: ActivatedRoute, private httpInfo: InformativoRequestService) { }

  ngOnInit() {
    if(this.routeSnap.snapshot.queryParams['tipo'] ) {
      this.ionChangeOption(this.routeSnap.snapshot.queryParams['tipo']);
      this.valueOption = this.routeSnap.snapshot.queryParams['tipo'];
    } else {
      this.ionChangeOption();
    }
  }

  private listaInformativo(tipo: string = '') {
    this.infoAll = [];
    this.httpInfo.findParameterNameOrAll('', tipo, 'asc', this.page, this.size).pipe(tap(pp => {
      this.infoAll.push(...pp.content);
      this.size = pp.size;
      this.page = this.page + 1;
      this.totalPages = pp.totalPages;
    })).subscribe(() => this.spinnerLoadService.hide());

  }

  /** Chamado quando alterar as opcoes do select */
  ionChangeOption(option: string = ''){
    this.spinnerLoadService.show();
    this.valueOption = option;
    this.page = 0;
    this.totalPages = 0;
    this.listaInformativo(option);
  }

  /**
   *  Infiniti scro ionic - logica
   * @param event
   */
  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.totalPages == this.page) {
        console.log(" aqui "+ this.totalPages +" "+ this.page)
        //event.target.disabled = true;
      } else {
        console.log(" aqui else "+ this.totalPages +" "+ this.page)
        this.listaInformativo(this.valueOption);
      }
      event.target.complete();
    }, 500);
  }

}
