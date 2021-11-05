import { BuscarCristalComponentModule } from './../shared/components/buscar-cristal/buscar-cristal.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { HomeModule } from '../page/home/home.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomeModule,
    Tab1PageRoutingModule,
    BuscarCristalComponentModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
