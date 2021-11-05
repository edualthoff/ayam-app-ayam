import { Informativo } from 'src/app/core/interfaces/informativo.interface';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-informativo-list',
  templateUrl: './informativo-list.component.html',
  styleUrls: ['./informativo-list.component.scss'],
})
export class InformativoListComponent implements OnInit {

  @Input('infoValue')
  info$: Array<Informativo>;

  constructor() { }

  ngOnInit() {}

}
