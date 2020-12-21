import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvatarActionsModule } from '@shared/components/avatar-actions/avatar-actions.module';
import { AvatarModule } from '@shared/components/avatar/avatar.module';
import { ConfirmDialogModule } from '@shared/components/confirm-dialog/confirm-dialog.module';
import { DatePickerModule } from '@shared/components/date-picker/date-picker.module';
import { RestDialogModule } from '@shared/components/rest-dialog/rest-dialog.module';
import { DropdownModule } from '@shared/components/dropdown/dropdown.module';
import { FormFieldsModule } from '@shared/components/form-fields/form-fields.module';
import { PlotModule } from '@shared/components/plot/plot.module';
import { RangeDatePickerModule } from '@shared/components/range-date-picker/range-date-picker.module';

@NgModule({
  imports: [],
  declarations: [],
  exports: [
    AvatarModule,
    AvatarActionsModule,
    CommonModule,
    ConfirmDialogModule,
    DatePickerModule,
    RestDialogModule,
    DropdownModule,
    FormFieldsModule,
    PlotModule,
    RangeDatePickerModule,
  ],
})
export class SharedModule {}
