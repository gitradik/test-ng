import { Component, Input, OnInit } from '@angular/core';
import { FormField } from '@shared/components/form-fields/form-field.class';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  @Input() field!: FormField;

  control!: FormControl;

  placement?: string = 'bottom-right';

  constructor() {}

  ngOnInit(): void {
    if (this.field) {
      this.control = this.field.formControl as FormControl;
    }
  }

  selection(option: string) {
    this.control.setValue(option);
  }
}
