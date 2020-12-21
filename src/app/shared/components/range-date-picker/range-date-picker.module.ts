import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { RangeDatePickerComponent } from './range-date-picker.component';

@NgModule({
  imports: [CommonModule, NgbDatepickerModule],
  declarations: [RangeDatePickerComponent],
  exports: [RangeDatePickerComponent],
})
export class RangeDatePickerModule {}
