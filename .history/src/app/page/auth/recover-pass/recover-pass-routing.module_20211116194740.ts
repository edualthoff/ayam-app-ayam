import { LayoutPageModule } from './../layout/layout.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecoverPassPage } from './recover-pass.page';
import { LayoutPage } from '../layout/layout.page';


const routes: Routes = [
  {
    path: '', component: LayoutPage, children: [
      {
        path: '',
        component: RecoverPassPage
      },
      {
        path: ':username',
        component: RecoverPassPage
      }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), LayoutPageModule],
  exports: [RouterModule],
})
export class RecoverPassPageRoutingModule {}
