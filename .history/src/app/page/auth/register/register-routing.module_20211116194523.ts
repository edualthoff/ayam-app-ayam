import { LayoutPageModule } from './../layout/layout.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterPage } from './register.page';
import { LayoutPage } from '../layout/layout.page';

const routes: Routes = [
  {
    path: '', component: LayoutPage, children: [
      {
        path: '',
        component: RegisterPage
      },
      {
        path: ':username',
        component: RegisterPage
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), LayoutPageModule],
  exports: [RouterModule],
})
export class RegisterPageRoutingModule { }
