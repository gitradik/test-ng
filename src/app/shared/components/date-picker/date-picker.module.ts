import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePickerComponent } from './date-picker.component';

@NgModule({
  imports: [CommonModule, FormsModule, NgbDatepickerModule],
  declarations: [DatePickerComponent],
  exports: [DatePickerComponent],
})
export class DatePickerModule {}
