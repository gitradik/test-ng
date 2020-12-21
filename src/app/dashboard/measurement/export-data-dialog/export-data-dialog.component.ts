import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {
  FormField,
  FieldType,
  DataType,
} from '@app/shared/components/form-fields/form-field.class';
import { FormGroup } from '@angular/forms';

export interface ExportDataConfig {
  rangeDateTimeFormField: FormField;
  valueFormField: FormField;
  formGroup: FormGroup;
}

@Component({
  selector: 'app-export-data-dialog',
  templateUrl: './export-data-dialog.component.html',
  styleUrls: ['./export-data-dialog.component.scss'],
})
export class ExportDataDialogComponent implements OnInit {
  @Input() data!: ExportDataConfig;

  formGroup!: FormGroup;

  valueFormField = new FormField({
    name: 'value',
    type: FieldType.CHECKBOXES,
    dataType: DataType.LIST,
    options: [],
    value: [],
  });

  constructor(private modal: NgbActiveModal) {}

  ngOnInit(): void {
    if (this.data?.valueFormField && this.data?.formGroup) {
      const { options } = this.data.valueFormField;
      this.valueFormField.options = options ? [...options] : [];

      const control = this.data.formGroup.get('value');
      if (control) {
        const { value } = control;
        (this.valueFormField.value as Array<string>).push(value || '');
      }
    }
  }

  close(): void {
    this.modal.close();
  }

  submit(): void {}
}
