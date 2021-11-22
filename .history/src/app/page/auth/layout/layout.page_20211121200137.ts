import { AuthService } from './../../../core/authentication/auth.service';

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginPage } from '../login/login.page';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutPage implements OnInit {

  // botao de voltar quando está na pagina de login
  buttonBackUrl = '/auth/login';
  buttonClose = false;

  constructor(private router: ActivatedRoute, private http: AuthService) { }

  ngOnInit() { }

  ionViewWillEnter() {
    console.log("aq "+ this.http.currentRoute())
    if(Object.is(LoginPage, this.router.snapshot.firstChild.component)) {
      this.buttonClose = true;
      // URL do botao na pagina de login
      this.buttonBackUrl = this.http.currentRoute();
    }
  }

}

