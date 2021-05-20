import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursehistoryPageRoutingModule } from './coursehistory-routing.module';

import { CoursehistoryPage } from './coursehistory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursehistoryPageRoutingModule
  ],
  declarations: [CoursehistoryPage]
})
export class CoursehistoryPageModule {}
