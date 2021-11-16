import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicSwiper } from '@ionic/angular';
import SwiperCore from 'swiper';

SwiperCore.use([IonicSwiper]);

@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.page.html',
  styleUrls: ['./iniciar.page.scss'],
})
export class IniciarPage implements OnInit {

  private slides;


  slideActive;

  slideOptsOne = {
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
    console.log("aqui eu")
    this.slides = ev;
  }
}
