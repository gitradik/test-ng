import { NgModule } from '@angular/core';

import { ExportDataDialogComponent } from './export-data-dialog.component';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [SharedModule],
  declarations: [ExportDataDialogComponent],
  entryComponents: [ExportDataDialogComponent],
  exports: [ExportDataDialogComponent],
})
export class ExportDataDialogModule {}
