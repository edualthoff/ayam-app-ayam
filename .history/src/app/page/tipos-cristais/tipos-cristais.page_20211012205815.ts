import { SpinnerLoadService } from './../../shared/components/spinner-load/spinner-load.service';
import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tipos-cristais',
  template: `<ion-router-outlet></ion-router-outlet>`,
  styleUrls: ['./tipos-cristais.page.scss'],
})
export class TiposCristaisPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  navDescricaoCristal(){
  }
}
