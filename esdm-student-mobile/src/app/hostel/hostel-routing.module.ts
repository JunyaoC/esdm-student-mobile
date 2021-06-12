import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HostelPage } from './hostel.page';

const routes: Routes = [
  {
    path: '',
    component: HostelPage
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'electric',
    loadChildren: () => import('./electric/electric.module').then( m => m.ElectricPageModule)
  },
  {
    path: 'complaint',
    loadChildren: () => import('./complaint/complaint.module').then( m => m.ComplaintPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HostelPageRoutingModule {}
