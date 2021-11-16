import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.page.html',
  styleUrls: ['./iniciar.page.scss'],
})
export class IniciarPage implements OnInit {


  slideOptsOne = {
    initialSlide: 0,
    autoplay: false,
    pagination: {
      el: '.swiper-pagination',
      modifierClass: 'swiper-pagination-custom-',
      clickable: true,
    }
  };
  constructor() { }

  ngOnInit() {
  }

}
