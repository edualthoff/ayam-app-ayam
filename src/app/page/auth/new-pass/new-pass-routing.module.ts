import { LayoutPageModule } from './../layout/layout.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutPage } from '../layout/layout.page';

import { NewPassPage } from './new-pass.page';


const routes: Routes = [
  {
    path: '', component: LayoutPage, children: [
      {
        path: '',
        component: NewPassPage
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), LayoutPageModule],
  exports: [RouterModule],
})
export class NewPassPageRoutingModule {}
