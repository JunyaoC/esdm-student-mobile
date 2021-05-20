import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiningPage } from './dining.page';

const routes: Routes = [
  {
    path: '',
    component: DiningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiningPageRoutingModule {}
