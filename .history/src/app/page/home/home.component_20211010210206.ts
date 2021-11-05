import { InformativoRequestService } from './../../core/services/http/informativo/informativo-request.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Informativo } from 'src/app/core/interfaces/informativo.interface';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  infoNoticia: Array<Informativo>;
  infoDica$: Observable<Array<Informativo>>;

  constructor(private httpInfo: InformativoRequestService) { }

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: false
  };

  ngOnInit(): void {
    this.noticiasDestaque();
    this.dicaDestaque();
  }


  private noticiasDestaque(){
     this.httpInfo.findAllByTipoAndAtivoResultSetQtd('noticia', 4)
     .pipe(
      debounceTime(500),
       map(x => {
         this.infoNoticia.push(...x);
        })
      );
  }

  private dicaDestaque(){
    this.infoDica$ = this.httpInfo.findAllByTipoAndAtivoResultSetQtd('dica', 2).pipe<Array<Informativo>>(debounceTime(500));
 }
}
