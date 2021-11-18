import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPage } from './auth.page';

const routes: Routes = [
  {
    path: '',
    component: AuthPage, children: [
      {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'register',
        loadChildren: () => import('../auth/register/register.module').then(m => m.RegisterPageModule)
      },
      {
        path: 'recover-pass',
        loadChildren: () => import('./recover-pass/recover-pass.module').then( m => m.RecoverPassPageModule)
      },
      {
        path: 'new-pass',
        loadChildren: () => import('./new-pass/new-pass.module').then( m => m.NewPassPageModule)
      },
      {
        path: '**',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'layout',
    loadChildren: () => import('./layout/layout.module').then( m => m.LayoutPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {}
