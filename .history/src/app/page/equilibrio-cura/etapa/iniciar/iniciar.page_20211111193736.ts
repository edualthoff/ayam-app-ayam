import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { IonicSwiper } from '@ionic/angular';
import { Subject } from 'rxjs';
import SwiperCore, { Pagination, SwiperOptions, A11y  } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([IonicSwiper, Pagination, A11y]);

@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.page.html',
  styleUrls: ['./iniciar.page.scss'],
})
export class IniciarPage implements OnInit {

  @ViewChild('swiper', { static: false })
  private slides?: SwiperComponent;

  slideEnd: Subject<boolean>;

  slideOptsOne: SwiperOptions = {
    initialSlide: 0,
    autoplay: false,
  };

  constructor() { }

  ngOnInit() {
  }

  onSlideChange() {
    console.log("aq ")
    console.log("aq "+this.slides.swiperRef.isEnd)
    this.slideEnd.next(this.slides.swiperRef.isEnd);

  }

  setSwiperInstance(ev) {
    console.log("aqui de")
    this.slides = ev;
    console.log("aq "+this.slides.initialSlide)
    this.slides.index
  }
}
