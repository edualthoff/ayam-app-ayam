import { UserComponent } from './user.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [UserComponent]
})
export class UserModule { }
