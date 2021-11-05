import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformativoListComponent } from './informativo-list.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    InformativoListComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [InformativoListComponent]
})
export class InformativoListModule { }
