import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationPage } from './registration.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrationPage
  },  {
    path: 'kuota-pengetua',
    loadChildren: () => import('./kuota-pengetua/kuota-pengetua.module').then( m => m.KuotaPengetuaPageModule)
  },
  {
    path: 'open-registration',
    loadChildren: () => import('./open-registration/open-registration.module').then( m => m.OpenRegistrationPageModule)
  },
  {
    path: 'amendment',
    loadChildren: () => import('./amendment/amendment.module').then( m => m.AmendmentPageModule)
  },
  {
    path: 'status',
    loadChildren: () => import('./status/status.module').then( m => m.StatusPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationPageRoutingModule {}
