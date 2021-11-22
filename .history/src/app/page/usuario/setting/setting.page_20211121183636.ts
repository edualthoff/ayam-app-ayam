import { AppRolesService } from './../../../core/authentication/permissions/app-roles.service';
import { CloseActionAppService } from './../../../shared/services/close-app/close-action-app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  constructor(public closeAction: CloseActionAppService, public appRolesService: AppRolesService) { }

  ngOnInit() {
  }

  closeActionApp() {
    this.closeAction.presentActionSheet();
  }
}
