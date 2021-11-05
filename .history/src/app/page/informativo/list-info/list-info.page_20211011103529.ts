import { Informativo } from 'src/app/core/interfaces/informativo.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-info',
  templateUrl: './list-info.page.html',
  styleUrls: ['./list-info.page.scss'],
})
export class ListInfoPage implements OnInit {

  infoDica$: Informativo;

  constructor(private routeSnap: ActivatedRoute) { }

  ngOnInit() {
    if(this.routeSnap.snapshot.queryParams['tipo'] ) {
      console.log("log "+    this.routeSnap.snapshot.queryParams['tipo'])
    }
  }

}
