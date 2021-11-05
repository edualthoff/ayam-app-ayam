import { SpinnerLoadService } from './../../shared/components/spinner-load/spinner-load.service';
import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tipos-cristais',
  templateUrl: './tipos-cristais.page.html',
  styleUrls: ['./tipos-cristais.page.scss'],
})
export class TiposCristaisPage implements OnInit {

  constructor(public spinnerLoadService: SpinnerLoadService, private routeSnap: ActivatedRoute) { }

  ngOnInit() {
  }

  navDescricaoCristal(){
  }
}
