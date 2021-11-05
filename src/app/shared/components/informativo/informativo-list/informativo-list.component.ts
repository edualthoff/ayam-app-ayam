import { Informativo } from 'src/app/core/interfaces/informativo.interface';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-informativo-list',
  templateUrl: './informativo-list.component.html',
  styleUrls: ['./informativo-list.component.scss'],
})
export class InformativoListComponent implements OnInit {

  @Input('infoValue')
  infoValues: Informativo[];
  @Input() routerPath: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {}

  routLinkInfo(pathIndex: any){
    if (this.routerPath != null)
      this.router.navigate([this.routerPath, pathIndex], {relativeTo: this.route} )
  }

}
