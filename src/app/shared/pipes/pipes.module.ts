import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateFormatPipe } from './date-format.pipe';
import { TimeFormatPipe } from './time-format.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [DateFormatPipe, TimeFormatPipe],
  exports: [DateFormatPipe, TimeFormatPipe],
})
export class PipesModule {}
