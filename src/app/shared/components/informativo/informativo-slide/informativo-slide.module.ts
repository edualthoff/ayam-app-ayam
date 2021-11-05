import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';

import { IonicModule } from '@ionic/angular';
import { InformativoSlideComponent } from './informativo-slide.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  declarations: [
    InformativoSlideComponent
  ],
  exports: [
    InformativoSlideComponent
  ]
})
export class InformativoSlideComponentModule {}
