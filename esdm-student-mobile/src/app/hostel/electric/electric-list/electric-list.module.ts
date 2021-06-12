import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElectricListPageRoutingModule } from './electric-list-routing.module';

import { ElectricListPage } from './electric-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElectricListPageRoutingModule
  ],
  declarations: [ElectricListPage]
})
export class ElectricListPageModule {}
