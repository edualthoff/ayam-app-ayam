import { IonSelectOptionLabelDirective } from './ion-select-option-label.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [IonSelectOptionLabelDirective],
  imports: [
    CommonModule
  ],
  exports: [IonSelectOptionLabelDirective]
})
export class IonSelectOptionModule { }
