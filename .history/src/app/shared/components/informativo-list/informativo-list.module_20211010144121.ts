import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformativoListComponent } from './informativo-list.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InformativoListComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class InformativoListModule { }
