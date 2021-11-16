import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { IonicSwiper } from '@ionic/angular';
import SwiperCore, { Pagination, SwiperOptions, A11y, Swiper  } from 'swiper';

SwiperCore.use([IonicSwiper, Pagination, A11y]);

@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.page.html',
  styleUrls: ['./iniciar.page.scss'],
})
export class IniciarPage implements OnInit, OnChanges {

  @ViewChild('ionSlides', {static: true})
  slides: Swiper;

  slideActive;

  slideOptsOne: SwiperOptions = {
    initialSlide: 0,
    autoplay: false,
  };

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("aq "+this.slides.activeIndex)

  }

  ngOnInit() {
  }

  onSlideChange() {
    console.log("aq ")
  }

  setSwiperInstance(ev) {
    console.log("aqui de")
    this.slides = ev;
    console.log("aq "+this.slides.activeIndex)
    this.slides.activeIndex
  }
}