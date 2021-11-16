import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { IonicSwiper } from '@ionic/angular';
import { BehaviorSubject, Subject } from 'rxjs';
import SwiperCore, { Pagination, SwiperOptions, A11y  } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([IonicSwiper, Pagination, A11y]);

@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.page.html',
  styleUrls: ['./iniciar.page.scss'],
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
