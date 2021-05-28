import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectricListPage } from './electric-list.page';

const routes: Routes = [
  {
    path: '',
    component: ElectricListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElectricListPageRoutingModule {}
