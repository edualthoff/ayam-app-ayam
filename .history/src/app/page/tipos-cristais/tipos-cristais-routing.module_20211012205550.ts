import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CristalDescricaoComponent } from './cristal-descricao/cristal-descricao.component';

import { TiposCristaisPage } from './tipos-cristais.page';

const routes: Routes = [
  {
    path: '', component: TiposCristaisPage,
  },
  {
    path: 'descricao/:id', component: CristalDescricaoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiposCristaisPageRoutingModule {}
