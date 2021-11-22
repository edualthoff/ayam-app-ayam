import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioPage } from './usuario.page';

const routes: Routes = [
  {
    path: '', component: UsuarioPage, children: [
      {
        path: '',
        loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
      },
      {
        path: 'setting',
        loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioPageRoutingModule {}
