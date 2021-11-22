import { CloseActionSheetComponent } from './close-action-sheet.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [CloseActionSheetComponent],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [CloseActionSheetComponent]
})
export class CloseActionSheetModule { }
