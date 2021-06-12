import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KuotaPengetuaPage } from './kuota-pengetua.page';

const routes: Routes = [
  {
    path: '',
    component: KuotaPengetuaPage
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KuotaPengetuaPageRoutingModule {}
