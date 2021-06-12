import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComplaintFormPageRoutingModule } from './complaint-form-routing.module';

import { ComplaintFormPage } from './complaint-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComplaintFormPageRoutingModule
  ],
  declarations: [ComplaintFormPage]
})
export class ComplaintFormPageModule {}
