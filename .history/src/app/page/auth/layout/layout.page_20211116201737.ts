
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

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    console.log("aq "+ Object.is(LoginPage, this.router.snapshot.firstChild.component)
    )
  }

}

