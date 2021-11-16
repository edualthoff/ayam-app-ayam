import { Informativo } from './../../../../core/interfaces/informativo.interface';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-informativo-slide',
  templateUrl: './informativo-slide.component.html',
  styleUrls: ['./informativo-slide.component.scss'],
})
export class InformativoSlideComponent implements OnInit {

  @Input('infoValue')
  infoValues: Informativo[];
  @Input() routerPath: string;

  slideOps: any;

  slideOptsOneTwo = {
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
    pagination: {
      el: '.swiper-pagination',
      modifierClass: 'swiper-pagination-custom-',
      clickable: true,
    }
  };

  slideOptsOneTwo2 = {
    initialSlide: 0,
    autoplay: false,
    slidesPerView: 1.1,
    centeredSlides: true,
    spaceBetween: 20,
    width: 300,
    breakpoints: {
      // when window width is >= 540px
      540: {
        slidesPerView: 1.1,
        spaceBetween: 5,
        width: '500px'
      },
    },
    pagination: {
      el: '.swiper-pagination',
      modifierClass: 'swiper-pagination-custom-',
      clickable: true,
    }
  };
  /*
  slideOptsOne = {
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
  }; */

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

  }

  routLinkInfo(pathIndex: any){
    if (this.routerPath != null)
      this.router.navigate([this.routerPath, pathIndex], {relativeTo: this.route} )
  }


  /** Descontinuado
  private validOptions() {
    console.log("aqui 3")
    if (this.infoValues != null ) {
      console.log("aqui 5")
      switch (this.infoValues.length > 1) {
        case true:
          console.log("aqui 1")
          this.slideOps = this.slideOptsOneTwo
          break;

        case false:
          console.log("aqui 2")

          this.slideOps = this.slideOptsOne
          break;
      }
    }
  } */
}
