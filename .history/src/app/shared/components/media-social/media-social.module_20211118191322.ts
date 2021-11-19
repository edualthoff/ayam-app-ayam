import { MediaSocialComponent } from './media-social.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [MediaSocialComponent],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [MediaSocialComponent]
})
export class MediaSocialModule { }
