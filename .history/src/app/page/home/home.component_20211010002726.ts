import { InformativoRequestService } from './../../core/services/http/informativo/informativo-request.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Informativo } from 'src/app/core/interfaces/informativo.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  infoNoticia: Observable<Informativo>;

  constructor(private httpInfo: InformativoRequestService) { }

  ngOnInit(): void {
    this.noticiasDestaque();
  }


  private noticiasDestaque(){
     this. infoNoticia = this.httpInfo.findAllByTipoAndAtivo('noticia');
  }
}
