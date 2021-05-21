import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterstickerPageRoutingModule } from './registersticker-routing.module';

import { RegisterstickerPage } from './registersticker.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RegisterstickerPageRoutingModule
  ],
  declarations: [RegisterstickerPage]
})
export class RegisterstickerPageModule {}
