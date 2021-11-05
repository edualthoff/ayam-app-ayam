import { InformativoRequestService } from './../../core/services/http/informativo/informativo-request.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private httpInfo: InformativoRequestService) { }

  ngOnInit(): void {
  }

  noticiasDestaque(){
    return this.httpInfo.findAllByTipoAndAtivo('noticia');
  }
}
