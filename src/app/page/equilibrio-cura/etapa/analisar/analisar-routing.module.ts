import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnalisarPage } from './analisar.page';

const routes: Routes = [
  {
    path: '',
    component: AnalisarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalisarPageRoutingModule {}
