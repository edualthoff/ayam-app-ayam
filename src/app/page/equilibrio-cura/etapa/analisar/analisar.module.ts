import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnalisarPageRoutingModule } from './analisar-routing.module';

import { AnalisarPage } from './analisar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnalisarPageRoutingModule
  ],
  declarations: [AnalisarPage]
})
export class AnalisarPageModule {}
