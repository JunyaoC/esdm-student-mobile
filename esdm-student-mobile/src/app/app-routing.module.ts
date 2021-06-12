import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'attendance',
    loadChildren: () => import('./attendance/attendance.module').then( m => m.AttendancePageModule)
  },
  {
    path: 'attendance/:class_id',
    loadChildren: () => import('./attendance/attendance.module').then( m => m.AttendancePageModule)
  },
  {
    path: 'library',
    loadChildren: () => import('./library/library.module').then( m => m.LibraryPageModule)
  },
  {
    path: 'dining',
    loadChildren: () => import('./dining/dining.module').then( m => m.DiningPageModule)
  },
  {
    path: 'health',
    loadChildren: () => import('./health/health.module').then( m => m.HealthPageModule)
  },
  {
    path: 'vehicle',
    loadChildren: () => import('./vehicle/vehicle.module').then( m => m.VehiclePageModule)
  },
  {
    path: 'registervehicle',
    loadChildren: () => import('./registervehicle/registervehicle.module').then( m => m.RegistervehiclePageModule)
  },
  {
    path: 'hostel',
    loadChildren: () => import('./hostel/hostel.module').then( m => m.HostelPageModule)
  },
    {
    path: 'procourse',
    loadChildren: () => import('./procourse/procourse.module').then( m => m.ProcoursePageModule)
  },
  {
    path: 'appointment',
    loadChildren: () => import('./health/appointment/appointment.module').then( m => m.AppointmentPageModule)
  },
  {
    path: 'schedule',
    loadChildren: () => import('./health/schedule/schedule.module').then( m => m.SchedulePageModule)
  },
  {
    path: 'record',
    loadChildren: () => import('./health/record/record.module').then( m => m.RecordPageModule)
  },
  {
    path: 'booking',
    loadChildren: () => import('./health/booking/booking.module').then( m => m.BookingPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
