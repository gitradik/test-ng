import { Component, Input, OnInit } from '@angular/core';
import { FormField, FieldType, DataType } from '@shared/components/form-fields/form-field.class';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-fields',
  templateUrl: './form-fields.component.html',
  styleUrls: ['./form-fields.component.scss'],
})
export class FormFieldsComponent implements OnInit {
  readonly fieldType = FieldType;
  readonly dataType = DataType;

  @Input() formFields!: FormField[];
  @Input() formGroup!: FormGroup;

  @Input() row: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
