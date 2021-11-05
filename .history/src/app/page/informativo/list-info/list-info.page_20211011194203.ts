import { SpinnerLoadService } from './../../../shared/components/spinner-load/spinner-load.service';
import { InformativoRequestService } from './../../../core/services/http/informativo/informativo-request.service';
import { Informativo } from 'src/app/core/interfaces/informativo.interface';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, interval, Observable } from 'rxjs';
import { debounce, debounceTime, distinct, distinctUntilKeyChanged, map, tap } from 'rxjs/operators';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-list-info',
  templateUrl: './list-info.page.html',
  styleUrls: ['./list-info.page.scss'],
})
export class ListInfoPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  infoAll: Informativo[] = [];
  valueOption = '';
  page = 0;
  size = 10;

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
      console.log("value ")
    })).subscribe(() => this.spinnerLoadService.hide());

  }

  /** Chamado quando alterar as opcoes do select */
  ionChangeOption(option: string = ''){
    this.spinnerLoadService.show();
    this.listaInformativo(option);
  }

  /**
   *  Infiniti scro ionic - logica
   * @param event
   */
  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.infoAll.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}
