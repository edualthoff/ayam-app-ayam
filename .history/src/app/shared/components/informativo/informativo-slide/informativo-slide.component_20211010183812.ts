import { Informativo } from './../../../../core/interfaces/informativo.interface';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

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
    autoplay: false,
    slidesPerView: 'auto',
    spaceBetween: 10,
    breakpoints: {
      // when window width is >= 540px
      540: {
        slidesPerView: 'auto',
        spaceBetween: 10
      },
    }
  };

  slideOptsOneCustom = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: false,
    pagination: {
      el: '.swiper-pagination',
      modifierClass: 'swiper-pagination-custom-',
      clickable: true,
    }
  };

  constructor() { }

  ngOnInit() {

  }

}
