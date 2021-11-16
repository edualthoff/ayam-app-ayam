import { Component, OnInit } from '@angular/core';
import { IonicSwiper } from '@ionic/angular';
import SwiperCore, { Pagination, SwiperOptions, A11y, Swiper  } from 'swiper';

SwiperCore.use([IonicSwiper, Pagination, A11y]);

@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.page.html',
  styleUrls: ['./iniciar.page.scss'],
})
export class IniciarPage implements OnInit {

  slides: Swiper;

  slideActive;

  slideOptsOne: SwiperOptions = {
    initialSlide: 0,
    autoplay: false,
  };

  constructor() { }

  ngOnInit() {
  }

  onSlideChange() {
    console.log("aq ")
  }

  setSwiperInstance(ev) {
    this.slides.activeIndex
    this.slides = ev;
    console.log("aq "+this.slides.isBeginning)
  }
}