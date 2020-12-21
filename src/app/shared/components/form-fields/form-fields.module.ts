import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormFieldsComponent } from '@shared/components/form-fields/form-fields.component';
import { DropdownModule } from '@shared/components/dropdown/dropdown.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ColorPickerModule } from '@shared/components/color-picker/color-picker.module';
import { FormFieldErrorComponent } from './form-field-error/form-field-error.component';
import { DatePickerModule } from '../date-picker/date-picker.module';
import { RangeDatePickerModule } from '../range-date-picker/range-date-picker.module';
import { RangeDateTimePickerModule } from '../range-date-time-picker/range-date-time-picker.module';
import { CheckboxesModule } from '../checkboxes/checkboxes.module';

@NgModule({
  imports: [
    CommonModule,
    CheckboxesModule,
    DropdownModule,
    DatePickerModule,
    RangeDatePickerModule,
    RangeDateTimePickerModule,
    ReactiveFormsModule,
    ColorPickerModule,
  ],
  declarations: [FormFieldsComponent, FormFieldErrorComponent],
  exports: [FormFieldsComponent],
})
export class FormFieldsModule {}
