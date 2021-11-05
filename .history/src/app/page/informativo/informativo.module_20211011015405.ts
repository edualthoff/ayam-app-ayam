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
    InformativoRoutingModule
  ]
})
export class InformativoModule { }
