import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerComponent } from './color-picker.component';
import { ColorPickerModule as NgxColorPickerModule } from 'ngx-color-picker';

@NgModule({
  imports: [CommonModule, NgxColorPickerModule],
  declarations: [ColorPickerComponent],
  exports: [ColorPickerComponent],
})
export class ColorPickerModule {}
