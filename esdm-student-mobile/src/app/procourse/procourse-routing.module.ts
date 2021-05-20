import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcoursePage } from './procourse.page';

const routes: Routes = [
  {
    path: '',
    component: ProcoursePage
  },  {
    path: 'coursehistory',
    loadChildren: () => import('./coursehistory/coursehistory.module').then( m => m.CoursehistoryPageModule)
  },
  {
    path: 'courselist',
    loadChildren: () => import('./courselist/courselist.module').then( m => m.CourselistPageModule)
  },
  {
    path: 'reportissue',
    loadChildren: () => import('./reportissue/reportissue.module').then( m => m.ReportissuePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcoursePageRoutingModule {}
