import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.page.html',
  styleUrls: ['./iniciar.page.scss'],
})
export class IniciarPage implements OnInit {

  slideActive;

  slideOptsOne = {
    initialSlide: 0,
    autoplay: false,
  };

  constructor() { }

  ngOnInit() {
  }

}
