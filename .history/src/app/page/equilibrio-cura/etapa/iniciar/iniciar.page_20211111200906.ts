import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IonicSwiper } from '@ionic/angular';
import SwiperCore, { Pagination, SwiperOptions, A11y  } from 'swiper';

SwiperCore.use([IonicSwiper, Pagination, A11y]);

@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.page.html',
  styleUrls: ['./iniciar.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IniciarPage implements OnInit {

  slideOptsOne: SwiperOptions = {
    initialSlide: 0,
    autoplay: false,
  };

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {
  }

  onSlideChange() {
    this.ref.detectChanges();

  }
}
