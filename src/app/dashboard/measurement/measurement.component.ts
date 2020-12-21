import { Component, OnInit } from '@angular/core';
import {
  FormField,
  FieldType,
  DataType,
} from '@app/shared/components/form-fields/form-field.class';
import { FormFieldsService } from '@app/shared/components/form-fields/form-fields.service';
import { FormGroup } from '@angular/forms';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import {
  ExportDataDialogComponent,
  ExportDataConfig,
} from './export-data-dialog/export-data-dialog.component';

@Component({
  selector: 'app-measurement',
  templateUrl: './measurement.component.html',
  styleUrls: ['./measurement.component.scss'],
})
export class MeasurementComponent implements OnInit {
  formGroup: FormGroup;

  formFields: FormField[] = [
    new FormField({
      name: 'rangeDateTime',
      label: '',
      required: false,
      type: FieldType.RANGE_DATE_TIME,
    }),
    new FormField({
      name: 'graphSettings',
      label: '',
      required: false,
      type: FieldType.CHECKBOXES,
      dataType: DataType.LIST,
      options: ['Disable auto refresh', 'Show points'],
      value: ['Show points'],
      cssClass: 'ml-3',
    }),
  ];

  valueFormField = new FormField({
    name: 'value',
    label: '',
    required: false,
    type: FieldType.DROPDOWN,
    maxWidth: '278px',
    minWidth: '278px',
    options: [
      'Values: Y_R1.1_Bearing (RMS)( 0,00 mG)',
      'Value #2',
      'Value #3',
      'Value #4',
      'Value #5',
      'Value #6',
      'Value #7',
      'Value #8',
      'Value #9',
      'Value #10',
      'Value #11',
      'Value #12',
      'Value #13',
      'Value #14',
      'Value #15',
      'Value #16',
      'Value #17',
      'Value #18',
      'Value #19',
    ],
    value: 'Values: Y_R1.1_Bearing (RMS)( 0,00 mG)',
  });

  constructor(private formFieldsService: FormFieldsService, private modal: NgbModal) {
    this.formGroup = formFieldsService.getFormGroup(this.formFields);
    this.formGroup.addControl(this.valueFormField.name, this.valueFormField.formControl);
  }

  ngOnInit(): void {}

  openExportDataDialog(): void {
    const config: NgbModalOptions = {
      centered: true,
    };

    const dataConfig: ExportDataConfig = {
      rangeDateTimeFormField: this.formFields[0],
      valueFormField: this.valueFormField,
      formGroup: this.formGroup,
    };

    const modalRef = this.modal.open(ExportDataDialogComponent, config);
    modalRef.componentInstance.data = dataConfig;
  }
}
