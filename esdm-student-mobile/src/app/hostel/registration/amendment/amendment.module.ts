import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmendmentPageRoutingModule } from './amendment-routing.module';

import { AmendmentPage } from './amendment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmendmentPageRoutingModule
  ],
  declarations: [AmendmentPage]
})
export class AmendmentPageModule {}
