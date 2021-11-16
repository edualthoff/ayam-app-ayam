import { IonSelectOptionModule } from './../../../shared/directives/ion-select-option/ion-select-option.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    IonSelectOptionModule,
    NgxMaskModule
  ],
  declarations: [
    RegisterPage,
  ]
})
export class RegisterPageModule {}
