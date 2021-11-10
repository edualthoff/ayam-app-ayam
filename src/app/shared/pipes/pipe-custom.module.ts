import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './safe/safe.pipe';



@NgModule({
  declarations: [

    SafePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SafePipe
  ]
})
export class PipeCustomModule {
  static forRoot(): ModuleWithProviders<PipeCustomModule> {
    return {
      ngModule: PipeCustomModule,
    };
  }
}
