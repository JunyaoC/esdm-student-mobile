import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComplaintPage } from './complaint.page';

const routes: Routes = [
  {
    path: '',
    component: ComplaintPage
  },  {
    path: 'complaint-form',
    loadChildren: () => import('./complaint-form/complaint-form.module').then( m => m.ComplaintFormPageModule)
  },
  {
    path: 'complaint-history',
    loadChildren: () => import('./complaint-history/complaint-history.module').then( m => m.ComplaintHistoryPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComplaintPageRoutingModule {}
