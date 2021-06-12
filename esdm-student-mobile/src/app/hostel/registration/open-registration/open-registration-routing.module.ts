import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenRegistrationPage } from './open-registration.page';

const routes: Routes = [
  {
    path: '',
    component: OpenRegistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenRegistrationPageRoutingModule {}
