import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.page.html',
  styleUrls: ['./iniciar.page.scss'],
})
export class IniciarPage implements OnInit {

  @ViewChild('ionSlides')
  slideIon;

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

}
