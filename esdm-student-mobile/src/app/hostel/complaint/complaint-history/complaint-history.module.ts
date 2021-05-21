import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComplaintHistoryPageRoutingModule } from './complaint-history-routing.module';

import { ComplaintHistoryPage } from './complaint-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComplaintHistoryPageRoutingModule
  ],
  declarations: [ComplaintHistoryPage]
})
export class ComplaintHistoryPageModule {}
