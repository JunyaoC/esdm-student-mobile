import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterReasonPage } from './register-reason.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterReasonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterReasonPageRoutingModule {}
