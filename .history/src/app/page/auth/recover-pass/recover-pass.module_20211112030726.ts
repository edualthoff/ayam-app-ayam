import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecoverPassPageRoutingModule } from './recover-pass-routing.module';

import { RecoverPassPage } from './recover-pass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RecoverPassPageRoutingModule
  ],
  declarations: [RecoverPassPage]
})
export class RecoverPassPageModule {}
