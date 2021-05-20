import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KuotaPengetuaPage } from './kuota-pengetua.page';

const routes: Routes = [
  {
    path: '',
    component: KuotaPengetuaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KuotaPengetuaPageRoutingModule {}
