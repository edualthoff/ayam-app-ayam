import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarCristalComponent } from './buscar-cristal.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule,],
  declarations: [BuscarCristalComponent],
  exports: [BuscarCristalComponent]
})
export class BuscarCristalComponentModule {}
