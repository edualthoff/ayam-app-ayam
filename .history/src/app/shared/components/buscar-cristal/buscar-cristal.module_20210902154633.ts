import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarCristalComponent } from './buscar-cristal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, FontAwesomeModule],
  declarations: [BuscarCristalComponent],
  exports: [BuscarCristalComponent]
})
export class BuscarCristalComponentModule {}
