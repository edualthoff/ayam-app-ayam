import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformativoListComponent } from './informativo-list.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    InformativoListComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [InformativoListComponent]
})
export class InformativoListModule { }
