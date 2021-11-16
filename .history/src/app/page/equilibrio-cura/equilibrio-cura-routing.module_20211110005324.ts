import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquilibrioCuraPage } from './equilibrio-cura.page';

const routes: Routes = [
  {
    path: '',
    component: EquilibrioCuraPage
  },  {
    path: 'iniciar',
    loadChildren: () => import('./etapa/iniciar/iniciar.module').then( m => m.IniciarPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquilibrioCuraPageRoutingModule {}
