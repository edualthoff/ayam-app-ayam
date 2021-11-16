import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EquilibrioCuraPageRoutingModule } from './equilibrio-cura-routing.module';

import { EquilibrioCuraPage } from './equilibrio-cura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EquilibrioCuraPageRoutingModule
  ],
  declarations: [EquilibrioCuraPage]
})
export class EquilibrioCuraPageModule {}
