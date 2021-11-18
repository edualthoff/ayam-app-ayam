
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

  buttonBackUrl = '/';
  buttonClose = true;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() { }

  ionViewWillLeave() {
    if(!Object.is(LoginPage, this.router.snapshot.firstChild.component)) {
      console.log("aqui ")
      this.buttonClose = false;
      this.buttonBackUrl = '/auth/login/'
    }
  }

}

