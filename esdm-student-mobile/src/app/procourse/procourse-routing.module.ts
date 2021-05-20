import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcoursePage } from './procourse.page';

const routes: Routes = [
  {
    path: '',
    component: ProcoursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcoursePageRoutingModule {}
