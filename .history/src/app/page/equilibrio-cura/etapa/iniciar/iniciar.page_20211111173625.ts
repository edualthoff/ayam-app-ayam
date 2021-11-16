import { Component, OnInit } from '@angular/core';
import { IonicSwiper } from '@ionic/angular';
import SwiperCore, { Navigation, Pagination, SwiperOptions, A11y  } from 'swiper';

SwiperCore.use([IonicSwiper, Navigation, Pagination, A11y]);

@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.page.html',
  styleUrls: ['./iniciar.page.scss'],
})
export class IniciarPage implements OnInit {

  slides;

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
    console.log("aqui eu"+ev)
    this.slides = ev;
  }
}
