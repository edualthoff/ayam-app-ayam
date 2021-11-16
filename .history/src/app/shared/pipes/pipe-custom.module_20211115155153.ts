import { PhonePipe } from './phone/phone.pipe';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './safe/safe.pipe';



@NgModule({
  declarations: [
    SafePipe,
    PhonePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SafePipe,
    PhonePipe
  ]
})
export class PipeCustomModule {
  static forRoot(): ModuleWithProviders<PipeCustomModule> {
    return {
      ngModule: PipeCustomModule,
    };
  }
}
