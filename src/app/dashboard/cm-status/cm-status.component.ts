import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { DisplayedColumn } from '@app/dashboard/shared/table/table.component';
import { MockDataService } from '@app/core/services/mock-data.service';
import { FormField, FieldType } from '@app/shared/components/form-fields/form-field.class';
import { FormFieldsService } from '@app/shared/components/form-fields/form-fields.service';
import { FormGroup } from '@angular/forms';

export interface CmStatusItem {
  eventTime: string;
  status: string;
}

const displayedColumn: DisplayedColumn[] = [
  {
    label: 'Event Time',
    name: 'eventTime',
  },
  {
    label: 'Status',
    name: 'status',
  },
];

@Component({
  selector: 'app-cm-status',
  templateUrl: './cm-status.component.html',
  styleUrls: ['./cm-status.component.scss'],
})
export class CmStatusComponent implements OnInit {
  displayedColumn = displayedColumn;

  cmStatusItems: Observable<CmStatusItem[]>;

  formFields: FormField[] = [
    new FormField({
      name: 'range-date',
      type: FieldType.RANGE_DATE,
    }),
  ];
  formGroup: FormGroup;

  constructor(
    private mockDataService: MockDataService,
    private formFieldsService: FormFieldsService,
  ) {
    this.cmStatusItems = mockDataService.fetchCmStatus().pipe(take(1));
    this.formGroup = formFieldsService.getFormGroup(this.formFields);
  }

  ngOnInit(): void {}
}
