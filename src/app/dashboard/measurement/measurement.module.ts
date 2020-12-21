import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

import { MeasurementRoutingModule } from './measurement-routing.module';
import { MeasurementComponent } from './measurement.component';
import { ExportDataDialogModule } from './export-data-dialog/export-data-dialog.module';

@NgModule({
  imports: [MeasurementRoutingModule, ExportDataDialogModule, SharedModule],
  declarations: [MeasurementComponent],
  exports: [MeasurementComponent],
})
export class MeasurementModule {}
