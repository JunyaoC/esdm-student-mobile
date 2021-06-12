import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassSchedulePageRoutingModule } from './class-schedule-routing.module';

import { ClassSchedulePage } from './class-schedule.page';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassSchedulePageRoutingModule
  ],
  declarations: [ClassSchedulePage],
  providers:[LocalNotifications]
})
export class ClassSchedulePageModule {}
