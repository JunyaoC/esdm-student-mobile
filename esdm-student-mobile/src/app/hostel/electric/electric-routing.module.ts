import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectricPage } from './electric.page';

const routes: Routes = [
  {
    path: '',
    component: ElectricPage
  },  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'electric-list',
    loadChildren: () => import('./electric-list/electric-list.module').then( m => m.ElectricListPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElectricPageRoutingModule {}
