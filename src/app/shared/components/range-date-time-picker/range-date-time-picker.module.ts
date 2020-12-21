import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangeDateTimePickerComponent } from './range-date-time-picker.component';
import {
  NgbDatepickerModule,
  NgbDropdownModule,
  NgbTimepickerModule,
} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '@app/shared/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    FormsModule,
    NgbDropdownModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
  ],
  declarations: [RangeDateTimePickerComponent],
  exports: [RangeDateTimePickerComponent],
})
export class RangeDateTimePickerModule {}
