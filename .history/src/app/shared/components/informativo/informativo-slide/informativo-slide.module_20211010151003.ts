import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';

import { IonicModule } from '@ionic/angular';

import { InformativoSlideComponent } from './informativo-slide.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LayoutModule
  ],
  declarations: [
    InformativoSlideComponent
  ],
  exports:
  [InformativoSlideComponent
  ]
})
export class InformativoSlideComponentModule {}
