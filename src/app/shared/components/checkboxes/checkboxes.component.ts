import { Component, OnInit, Input } from '@angular/core';
import { FormField } from '../form-fields/form-field.class';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.scss'],
})
export class CheckboxesComponent implements OnInit {
  @Input() field!: FormField;

  control!: FormControl;

  constructor() {}

  ngOnInit(): void {
    if (this.field) {
      this.control = this.field.formControl as FormControl;
    }
  }

  change(option: string): void {
    const arr = Array.isArray(this.control.value) ? [...this.control.value] : [];
    if (arr.includes(option)) {
      arr.splice(arr.indexOf(option), 1);
    } else {
      arr.push(option);
    }
    this.control.setValue(arr);
  }

  selectedOption(option: string): boolean {
    if (!Array.isArray(this.control.value)) {
      return false;
    }

    return this.control.value.includes(option);
  }
}
