import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterReasonPageRoutingModule } from './register-reason-routing.module';

import { RegisterReasonPage } from './register-reason.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterReasonPageRoutingModule
  ],
  declarations: [RegisterReasonPage]
})
export class RegisterReasonPageModule {}
