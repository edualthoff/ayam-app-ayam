import { UsuarioService } from './../../../core/services/utils/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(public usuario: UsuarioService) { }

  ngOnInit() {
  }

}
