import { TiposCristaisPageModule } from './../page/tipos-cristais/tipos-cristais.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab4Page } from './tab4.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../page/tipos-cristais/tipos-cristais.module').then(m => m.TiposCristaisPageModule)

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab4PageRoutingModule {}
