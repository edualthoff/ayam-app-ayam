import { LayoutPage } from './../layout/layout.page';
import { LayoutPageModule } from './../layout/layout.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '', component: LayoutPage
  },
  {
    path: ':email', component: LoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), LayoutPageModule],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
