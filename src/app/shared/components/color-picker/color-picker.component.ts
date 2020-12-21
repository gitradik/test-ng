import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormField } from '@shared/components/form-fields/form-field.class';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
})
export class ColorPickerComponent implements OnInit {
  @Input() field!: FormField;

  @ViewChild('colorPicker') colorPicker!: ElementRef;

  control!: FormControl;

  private _color?: string;
  private _colorPickerOpen = false;

  set color(color: string | undefined) {
    this.control.setValue(color || null);
    this._color = color;
  }

  get color(): string | undefined {
    return this._color;
  }

  set colorPickerOpen(isOpen: boolean) {
    this._colorPickerOpen = isOpen;
  }

  get colorPickerOpen(): boolean {
    return this._colorPickerOpen;
  }

  constructor() {}

  ngOnInit(): void {
    if (this.field) {
      this.control = this.field.formControl as FormControl;
    }
  }

  close(): void {
    setTimeout(() => {
      if (this.colorPickerOpen) {
        this.colorPickerOpen = false;

        if (!this.control.touched) {
          this.control.markAsTouched();
        }
      }
    }, 100);
  }

  toggle(event: Event): void {
    event.preventDefault();
    if (!this.colorPickerOpen) {
      this.colorPickerOpen = true;
    }
  }
}
