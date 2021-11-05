import { ListProdPage } from './list-prod/list-prod.page';
import { BuscarCristalComponentModule } from './../../shared/components/buscar-cristal/buscar-cristal.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TiposCristaisPageRoutingModule } from './tipos-cristais-routing.module';

import { TiposCristaisPage } from './tipos-cristais.page';
import { CristalDescricaoComponent } from './cristal-descricao/cristal-descricao.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpinnerLoadComponentModule } from 'src/app/shared/components/spinner-load/spinner-load.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TiposCristaisPageRoutingModule,
    BuscarCristalComponentModule,
    FontAwesomeModule,
    SpinnerLoadComponentModule
  ],
  declarations: [
    TiposCristaisPage,
    CristalDescricaoComponent,
    ListProdPage
  ]
})
export class TiposCristaisPageModule {}
