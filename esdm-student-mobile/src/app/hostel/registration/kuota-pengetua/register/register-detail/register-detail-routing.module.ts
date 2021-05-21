import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterDetailPage } from './register-detail.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterDetailPage
  },
  {
    path: 'register-reason',
    loadChildren: () => import('./register-reason/register-reason.module').then( m => m.RegisterReasonPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterDetailPageRoutingModule {}
