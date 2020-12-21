import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxesComponent } from './checkboxes.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CheckboxesComponent],
  exports: [CheckboxesComponent],
})
export class CheckboxesModule {}
