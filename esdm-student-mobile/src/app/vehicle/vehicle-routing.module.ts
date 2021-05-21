import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehiclePage } from './vehicle.page';

const routes: Routes = [
  {
    path: '',
    component: VehiclePage
  },  {
    path: 'registervehicle',
    loadChildren: () => import('./registervehicle/registervehicle.module').then( m => m.RegistervehiclePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehiclePageRoutingModule {}
