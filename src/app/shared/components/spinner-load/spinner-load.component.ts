import { SpinnerLoadService } from './spinner-load.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner-load',
  template: `
    <ion-spinner *ngIf="loading$ | async" class="internal-spinner"></ion-spinner>
  `,
  styleUrls: ['./spinner-load.component.scss'],
})
export class SpinnerLoadComponent implements OnInit {

  loading$ = this.loader.loading$;
  @Input() show: boolean;

  constructor(public loader: SpinnerLoadService) {}


  ngOnInit(): any {
    if (this.show) {
      this.loader.showHide(this.show);
    }
  }

}
