import { PipeCustomModule } from './../../../pipes/pipe-custom.module';
import { MaskIonInputDirective } from './mask-ion-input.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [MaskIonInputDirective],
  imports: [
    CommonModule,
    PipeCustomModule
  ],
  exports: [
    MaskIonInputDirective
  ]
})
export class InputModule { }
