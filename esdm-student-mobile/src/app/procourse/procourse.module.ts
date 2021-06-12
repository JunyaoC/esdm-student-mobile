import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcoursePageRoutingModule } from './procourse-routing.module';

import { ProcoursePage } from './procourse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcoursePageRoutingModule
  ],
  declarations: [ProcoursePage]
})
export class ProcoursePageModule {}
