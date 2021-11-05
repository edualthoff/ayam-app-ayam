import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-info',
  templateUrl: './list-info.page.html',
  styleUrls: ['./list-info.page.scss'],
})
export class ListInfoPage implements OnInit {

  constructor(private routeSnap: ActivatedRoute) { }

  ngOnInit() {
    console.log("log "+    this.routeSnap.queryParams['tipo'])
  }

}
