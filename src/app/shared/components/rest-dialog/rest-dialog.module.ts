import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestDialogComponent } from './rest-dialog.component';
import { LogDialogService } from '@app/core/services/dialogs/log-dialog.service';
import { FormFieldsModule } from '@shared/components/form-fields/form-fields.module';

@NgModule({
  imports: [CommonModule, FormFieldsModule],
  declarations: [RestDialogComponent],
  entryComponents: [RestDialogComponent],
  exports: [RestDialogComponent],
  providers: [LogDialogService],
})
export class RestDialogModule {}
