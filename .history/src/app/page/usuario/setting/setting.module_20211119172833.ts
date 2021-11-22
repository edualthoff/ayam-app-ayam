import { CloseActionAppService } from './../../../shared/services/close-app/close-action-app.service';
import { UserModule } from './user/user.module';
import { MediaSocialModule } from './../../../shared/components/media-social/media-social.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingPageRoutingModule } from './setting-routing.module';

import { SettingPage } from './setting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingPageRoutingModule,
    MediaSocialModule,
    UserModule
  ],
  declarations: [
    SettingPage
  ],
  providers: [CloseActionAppService]
})
export class SettingPageModule {}
