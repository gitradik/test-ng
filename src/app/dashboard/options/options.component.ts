import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { OptionsService } from '@app/core/services/options.service';
import { FieldType, FormField } from '@shared/components/form-fields/form-field.class';
import { FormFieldsService } from '@shared/components/form-fields/form-fields.service';

const formFields: FormField[] = [
  new FormField({
    name: 'facilityName',
    label: 'Facility name',
    type: FieldType.TEXT,
    required: false,
    errorMessage: 'This field is required',
  }),
  new FormField({
    name: 'description',
    label: 'Description',
    type: FieldType.TEXTAREA,
    required: false,
    errorMessage: 'This field is required',
  }),
  new FormField({
    name: 'gudelId',
    label: 'Güdel-ID',
    type: FieldType.TEXT,
    required: false,
    errorMessage: 'This field is required',
  }),
  new FormField({
    name: 'equipmentNumber',
    label: 'Equipment number',
    type: FieldType.TEXT,
    required: false,
    errorMessage: 'This field is required',
  }),
  new FormField({
    name: 'conditionMonitoringSerialNumber',
    label: 'Condition monitoring serial number',
    type: FieldType.TEXT,
    required: false,
    errorMessage: 'This field is required',
  }),
  new FormField({
    name: 'location',
    label: 'Location',
    type: FieldType.TEXT,
    required: false,
    errorMessage: 'This field is required',
  }),
  new FormField({
    name: 'color',
    label: 'Color',
    type: FieldType.COLOR,
    required: false,
    errorMessage: 'This field is required',
  }),
];

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent implements OnInit {
  formFields: FormField[];
  formGroup: FormGroup;

  constructor(
    private optionsService: OptionsService,
    private formFieldsService: FormFieldsService,
  ) {
    this.formFields = formFields;
    this.formGroup = this.formFieldsService.getFormGroup(this.formFields);
  }

  ngOnInit(): void {}

  submit(): void {
    if (this.formGroup.valid) {
      this.optionsService.setOptions(this.formGroup.value);
    }
  }

  testdata = {
    1: 12,
    2: 11,
    4: 13,
    '-2': 10,
  };
}
