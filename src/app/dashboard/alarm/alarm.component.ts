import { Component, OnInit } from '@angular/core';
import { DisplayedColumn } from '@app/dashboard/shared/table/table.component';
import { FieldType, FormField } from '@shared/components/form-fields/form-field.class';
import { MockDataService } from '@app/core/services/mock-data.service';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { FormFieldsService } from '@shared/components/form-fields/form-fields.service';

export interface AlarmItem {
  type: string;
  time: string;
  value: string;
  input: string;
  configurationInput: string;
  diagnosisName: string;
}

const displayedColumns: DisplayedColumn[] = [
  {
    name: 'type',
    label: 'Type',
  },
  {
    name: 'eventTime',
    label: 'Event Time',
  },
  {
    name: 'value',
    label: 'Value',
  },
  {
    name: 'input',
    label: 'Input',
  },
  {
    name: 'configurationInput',
    label: 'Configuration Input',
  },
  {
    name: 'diagnosisName',
    label: 'Diagnosis Name',
  },
];

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.scss'],
})
export class AlarmComponent implements OnInit {
  displayedColumns: DisplayedColumn[] = displayedColumns;

  alarmData: Observable<AlarmItem[]>;

  formFields: FormField[] = [
    new FormField({
      name: 'date',
      placeholder: 'Choose date',
      required: false,
      type: FieldType.DATE,
    }),
    new FormField({
      name: 'type',
      placeholder: 'All types',
      required: false,
      type: FieldType.DROPDOWN,
      options: ['type 1', 'type 2', 'type 3', 'type 4', 'type 5', 'type 6'],
    }),
  ];
  formGroup: FormGroup;

  constructor(
    private mockDataService: MockDataService,
    private formFieldsService: FormFieldsService,
  ) {
    this.alarmData = mockDataService.fetchAlarmData().pipe(take(1));
    this.formGroup = formFieldsService.getFormGroup(this.formFields);
  }

  ngOnInit(): void {}
}
