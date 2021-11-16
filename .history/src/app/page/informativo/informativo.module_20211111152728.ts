import { PipeCustomModule } from './../../shared/pipes/pipe-custom.module';
import { SpinnerLoadComponentModule } from './../../shared/components/spinner-load/spinner-load.module';
import { InformativoListModule } from './../../shared/components/informativo/informativo-list/informativo-list.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformativoRoutingModule } from './informativo-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ListInfoPage } from './list-info/list-info.page';
import { InformativoComponent } from './informativo.component';
import { RouterModule } from '@angular/router';
import { ViewInfoPage } from './view-info/view-info.page';


@NgModule({
  declarations: [
    InformativoComponent,
    ListInfoPage,
    ViewInfoPage
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule,
    InformativoRoutingModule,
    InformativoListModule,
    SpinnerLoadComponentModule,
    PipeCustomModule
  ]
})
export class InformativoModule { }
