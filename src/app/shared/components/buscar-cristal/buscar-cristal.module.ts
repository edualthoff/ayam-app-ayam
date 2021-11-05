import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarCristalComponent } from './buscar-cristal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconActiveDirective } from './icon-active.directive';
import { IconButtonChangeDirective } from './icon-button-change.directive';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, FontAwesomeModule],
  declarations: [BuscarCristalComponent, IconActiveDirective, IconButtonChangeDirective],
  exports: [BuscarCristalComponent]
})
export class BuscarCristalComponentModule {}
