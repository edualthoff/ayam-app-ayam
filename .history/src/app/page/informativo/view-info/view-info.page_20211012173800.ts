import { Informativo } from 'src/app/core/interfaces/informativo.interface';
import { InformativoRequestService } from './../../../core/services/http/informativo/informativo-request.service';
import { SpinnerLoadService } from './../../../shared/components/spinner-load/spinner-load.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-info',
  templateUrl: './view-info.page.html',
  styleUrls: ['./view-info.page.scss'],
})
export class ViewInfoPage implements OnInit {

  infoValue: Informativo;

  constructor(public spinnerLoadService: SpinnerLoadService, private routeSnap: ActivatedRoute, private httpInfo: InformativoRequestService ) { }

  ngOnInit() {
    this.spinnerLoadService.show();
    this.httpInfo.findById(this.routeSnap.snapshot.params['id'])
    .subscribe((x) => {
      this.infoValue = x;
      this.spinnerLoadService.hide();
    })
  }

}
