
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginPage } from '../login/login.page';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutPage implements OnInit {

  // botao de voltar quando está na pagina de login
  buttonBackUrl = '/';
  buttonClose = true;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() { }

  ionViewWillEnter() {
    if(!Object.is(LoginPage, this.router.snapshot.firstChild.component)) {
      this.buttonClose = false;
      // botao de voltar nas demais paginas
      this.buttonBackUrl = '/auth/login/'
    }
  }

}
