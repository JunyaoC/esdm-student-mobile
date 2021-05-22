import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryissuePage } from './historyissue.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryissuePage
  },
  {
    path: 'issuedetails',
    loadChildren: () => import('./issuedetails/issuedetails.module').then( m => m.IssuedetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryissuePageRoutingModule {}
