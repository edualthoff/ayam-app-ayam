import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpinnerLoadComponent } from './spinner-load.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule,],
  declarations: [SpinnerLoadComponent],
  exports: [SpinnerLoadComponent]
})
export class SpinnerLoadComponentModule {}
