import { Informativo } from './../../../../core/interfaces/informativo.interface';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  BreakpointObserver,
  BreakpointState
} from '@angular/cdk/layout';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-informativo-slide',
  templateUrl: './informativo-slide.component.html',
  styleUrls: ['./informativo-slide.component.scss'],
})
export class InformativoSlideComponent implements OnInit {

  @Input('infoValue')
  info$: Observable<Array<Informativo>>;

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: false
  };

  slideOptsTwo = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: false
  };

  constructor(private platform: Platform) { }

  ngOnInit() {

  }

}
