import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'informativo',
    loadChildren: () => import('./page/informativo/informativo.module').then( m => m.InformativoModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./page/auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: '**',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
