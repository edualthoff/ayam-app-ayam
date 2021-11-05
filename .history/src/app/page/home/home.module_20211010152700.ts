import { InformativoSlideComponentModule } from './../../shared/components/informativo/informativo-slide/informativo-slide.module';
import { BuscarCristalComponentModule } from './../../shared/components/buscar-cristal/buscar-cristal.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarCristalComponentModule,
    InformativoSlideComponentModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
