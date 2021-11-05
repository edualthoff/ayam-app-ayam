import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformativoComponent } from './informativo.component';
import { ListInfoPage } from './list-info/list-info.page';

const routes: Routes = [
  {path: '', component: InformativoComponent, children: [
    {
      path: '',
      component: ListInfoPage,
    },
    {
      path: ':tipo',
      component: ListInfoPage,
    },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformativoRoutingModule { }
