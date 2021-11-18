
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
    this.router.url.subscribe(x => {
      console.log("aq "+x.toString())
    })

    console.log("aq "+typeof LoginPage == this.router.snapshot.firstChild.component ? 'true ': 'false' );
  }

}

