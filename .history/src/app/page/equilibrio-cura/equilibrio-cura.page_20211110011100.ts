import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equilibrio-cura',
  template: '<ion-router-outlet></ion-router-outlet>',
  styleUrls: ['./equilibrio-cura.page.scss'],
})
export class EquilibrioCuraPage implements OnInit {

  slideOptsOne = {
    initialSlide: 0,
    autoplay: false,
  };

  constructor() { }

  ngOnInit() {
  }

}
