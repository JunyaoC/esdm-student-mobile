import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpenRegistrationPageRoutingModule } from './open-registration-routing.module';

import { OpenRegistrationPage } from './open-registration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpenRegistrationPageRoutingModule
  ],
  declarations: [OpenRegistrationPage]
})
export class OpenRegistrationPageModule {}
