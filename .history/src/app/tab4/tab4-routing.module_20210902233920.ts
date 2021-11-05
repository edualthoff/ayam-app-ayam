import { Tab4Page } from './tab4.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', component: Tab4Page,
    children: [
      { path: 'tipocristal', loadChildren: () => import('../page/tipos-cristais/tipos-cristais.module').then(m => m.TiposCristaisPageModule)},
      {
        path: '',
        redirectTo: '/tabs/tab4/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab4/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab4PageRoutingModule {}
