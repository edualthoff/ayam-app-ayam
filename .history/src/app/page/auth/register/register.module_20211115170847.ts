import { InputModule } from './../../../shared/directives/mask/input/input.module';
import { IonSelectOptionModule } from './../../../shared/directives/ion-select-option/ion-select-option.module';
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
    RegisterPageRoutingModule,
    IonSelectOptionModule,
    InputModule
  ],
  declarations: [
    RegisterPage,
  ]
})
export class RegisterPageModule {}
