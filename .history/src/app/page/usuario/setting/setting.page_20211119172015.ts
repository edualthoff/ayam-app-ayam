import { CloseActionAppService } from './../../../shared/services/close-app/close-action-app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  constructor(private closeAction: CloseActionAppService) { }

  ngOnInit() {
  }

  closeActionApp() {
    this.closeAction.presentActionSheet();
  }
}
