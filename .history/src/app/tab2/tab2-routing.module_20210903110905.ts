import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
    children: [
      { path: 'equilibriocura', loadChildren: () => import('../page/equilibrio-cura/equilibrio-cura.module').then(m => m.EquilibrioCuraPageModule)},
      {
        path: '',
        redirectTo: '/tabs/tab2/equilibriocura',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab2/equilibriocura',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
