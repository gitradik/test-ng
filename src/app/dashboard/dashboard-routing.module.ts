import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'alarm',
        loadChildren: () => import('./alarm/alarm.module').then(m => m.AlarmModule),
      },
      {
        path: 'measurement',
        loadChildren: () =>
          import('./measurement/measurement.module').then(m => m.MeasurementModule),
      },
      {
        path: 'log',
        loadChildren: () => import('./log/log.module').then(m => m.LogModule),
      },
      {
        path: 'cm-status',
        loadChildren: () => import('./cm-status/cm-status.module').then(m => m.CmStatusModule),
      },
      {
        path: 'options',
        loadChildren: () => import('./options/options.module').then(m => m.OptionsModule),
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
