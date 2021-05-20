import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiningPageRoutingModule } from './dining-routing.module';

import { DiningPage } from './dining.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiningPageRoutingModule
  ],
  declarations: [DiningPage]
})
export class DiningPageModule {}
