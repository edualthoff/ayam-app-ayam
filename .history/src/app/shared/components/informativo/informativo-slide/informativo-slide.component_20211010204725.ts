import { Informativo } from './../../../../core/interfaces/informativo.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-informativo-slide',
  templateUrl: './informativo-slide.component.html',
  styleUrls: ['./informativo-slide.component.scss'],
})
export class InformativoSlideComponent implements OnInit {

  @Input('infoValue')
  infoValues: Informativo[];

  slideOps: any;

  private slideOptsOneTwo = {
    initialSlide: 0,
    autoplay: false,
    slidesPerView: 'auto',
    spaceBetween: 10,
    breakpoints: {
      // when window width is >= 540px
      540: {
        slidesPerView: 2,
        spaceBetween: 10
      },
    },
  };

  private slideOptsOne = {
    initialSlide: 0,
    autoplay: false,
    slidesPerView: 'auto',
    spaceBetween: 10,
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
    if (this.infoValues != null ) {
      (this.infoValues.length > 1)  ? this.slideOps = this.slideOptsOneTwo : this.slideOps = this.slideOptsOne
    }
  }

}
