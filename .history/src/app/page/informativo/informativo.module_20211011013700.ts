import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformativoRoutingModule } from './informativo-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ListInfoPage } from './list-info/list-info.page';
import { InformativoComponent } from './informativo.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    InformativoComponent,
    ListInfoPage
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
