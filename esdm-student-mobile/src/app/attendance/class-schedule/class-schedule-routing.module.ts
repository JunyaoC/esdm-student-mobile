import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassSchedulePage } from './class-schedule.page';

const routes: Routes = [
  {
    path: '',
    component: ClassSchedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassSchedulePageRoutingModule {}
