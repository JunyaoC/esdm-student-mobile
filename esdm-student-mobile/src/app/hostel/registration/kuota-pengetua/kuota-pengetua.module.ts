import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KuotaPengetuaPageRoutingModule } from './kuota-pengetua-routing.module';

import { KuotaPengetuaPage } from './kuota-pengetua.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KuotaPengetuaPageRoutingModule
  ],
  declarations: [KuotaPengetuaPage]
})
export class KuotaPengetuaPageModule {}
