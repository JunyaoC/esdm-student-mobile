import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryissuePage } from './historyissue.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryissuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryissuePageRoutingModule {}
