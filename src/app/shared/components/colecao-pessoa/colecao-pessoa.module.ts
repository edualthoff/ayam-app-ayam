import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColecaoPessoaComponent } from './colecao-pessoa.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    ColecaoPessoaComponent,
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FontAwesomeModule
  ],
  exports: [
    ColecaoPessoaComponent
  ]
})
export class ColecaoPessoaModule { }
