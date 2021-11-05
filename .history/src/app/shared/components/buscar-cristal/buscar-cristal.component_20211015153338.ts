import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar-cristal',
  templateUrl: './buscar-cristal.component.html',
  styleUrls: ['./buscar-cristal.component.scss'],
})
export class BuscarCristalComponent implements OnInit {

  buttonCaract = false;
  constructor() { }

  ngOnInit() {}

  counter(i: number) {
    return new Array(i);
  }

  onClickCarac() {

  }
}
