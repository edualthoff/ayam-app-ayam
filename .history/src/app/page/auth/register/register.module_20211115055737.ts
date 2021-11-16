import { IonSelectOptionLabelDirective } from './../../../shared/directives/ion-select-option/ion-select-option-label.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegisterPageRoutingModule
  ],
  declarations: [
    RegisterPage,
    IonSelectOptionLabelDirective
  ]
})
export class RegisterPageModule {}
