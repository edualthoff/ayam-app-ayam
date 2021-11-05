import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformativoComponent } from './informativo.component';

const routes: Routes = [
  {path: '', component: InformativoComponent },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformativoRoutingModule { }
