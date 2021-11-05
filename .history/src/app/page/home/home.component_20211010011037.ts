import { InformativoRequestService } from './../../core/services/http/informativo/informativo-request.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Informativo } from 'src/app/core/interfaces/informativo.interface';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  infoNoticia$: Observable<Array<Informativo>>;

  constructor(private httpInfo: InformativoRequestService) { }

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: false
  };

  ngOnInit(): void {
    this.noticiasDestaque();
  }


  private noticiasDestaque(){
     this.infoNoticia$ = this.httpInfo.findAllByTipoAndAtivo('noticia').pipe<Array<Informativo>>(debounceTime(500));
  }
}
