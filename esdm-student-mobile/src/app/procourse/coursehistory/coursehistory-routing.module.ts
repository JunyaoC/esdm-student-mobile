import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursehistoryPage } from './coursehistory.page';

const routes: Routes = [
  {
    path: '',
    component: CoursehistoryPage
  },  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursehistoryPageRoutingModule {}
