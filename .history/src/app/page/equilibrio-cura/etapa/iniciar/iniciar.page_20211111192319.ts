import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { IonicSwiper } from '@ionic/angular';
import SwiperCore, { Pagination, SwiperOptions, A11y, Swiper  } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([IonicSwiper, Pagination, A11y]);

@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.page.html',
  styleUrls: ['./iniciar.page.scss'],
})
export class IniciarPage implements OnInit, AfterViewInit {

  @ViewChild('ionSlides', { static: false })
  slides?: SwiperComponent;

  slideActive;

  slideOptsOne: SwiperOptions = {
    initialSlide: 0,
    autoplay: false,
  };

  constructor() { }

  ngAfterViewInit(): void {
    console.log("aq "+this.slides.indexChange)

  }

  ngOnInit() {
    console.log("aq "+this.slides.index)

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
