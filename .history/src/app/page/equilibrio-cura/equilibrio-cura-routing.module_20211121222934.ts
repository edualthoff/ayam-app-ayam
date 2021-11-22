import { AuthGuard } from '../../core/authentication/permissions/guards/auth.guard';
import { IniciarPage } from './etapa/iniciar/iniciar.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquilibrioCuraPage } from './equilibrio-cura.page';

const routes: Routes = [
  {
    path: '', component: EquilibrioCuraPage, children: [
      {
        path: '', component: IniciarPage
      },
      {
        path: 'analisar', canActivate: [AuthGuard], /* data: { permissions: { only: ['user'] } }, */
        loadChildren: () => import('./etapa/analisar/analisar.module').then( m => m.AnalisarPageModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquilibrioCuraPageRoutingModule { }
