import { ColecaoPessoaModule } from './../../shared/components/colecao-pessoa/colecao-pessoa.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioPageRoutingModule } from './usuario-routing.module';

import { UsuarioPage } from './usuario.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioPageRoutingModule,
    FontAwesomeModule,
    ColecaoPessoaModule
  ],
  declarations: [UsuarioPage]
})
export class UsuarioPageModule {}
