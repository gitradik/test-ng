import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MeasurementComponent } from './measurement.component';

const routes: Routes = [{ path: '', component: MeasurementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class MeasurementRoutingModule {}
