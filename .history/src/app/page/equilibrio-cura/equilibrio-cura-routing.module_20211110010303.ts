import { IniciarPageModule } from './etapa/iniciar/iniciar.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquilibrioCuraPage } from './equilibrio-cura.page';

const routes: Routes = [
  {
    path: '', component: EquilibrioCuraPage, children: [
      {
        path: '', component: IniciarPageModule
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquilibrioCuraPageRoutingModule { }
