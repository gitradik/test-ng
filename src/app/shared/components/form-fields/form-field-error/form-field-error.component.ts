import { Component, Input, OnInit } from '@angular/core';
import { FormField } from '@shared/components/form-fields/form-field.class';

@Component({
  selector: 'app-form-field-error',
  templateUrl: './form-field-error.component.html',
  styleUrls: ['./form-field-error.component.scss'],
})
export class FormFieldErrorComponent implements OnInit {
  @Input() field!: FormField;

  constructor() {}

  ngOnInit(): void {}
}
