import { Component, OnInit } from '@angular/core';

import { DisplayedColumn } from '@app/dashboard/shared/table/table.component';
import { LogDialogService } from '@app/core/services/dialogs/log-dialog.service';
import { FieldType, FormField } from '@shared/components/form-fields/form-field.class';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import {
  ConfirmDialogComponent,
  ConfirmDialogConfig,
} from '@shared/components/confirm-dialog/confirm-dialog.component';
import { Observable } from 'rxjs';
import { MockDataService } from '@app/core/services/mock-data.service';
import { take } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { FormFieldsService } from '@shared/components/form-fields/form-fields.service';

export interface LogItem {
  timestamp?: Date;
  category: string;
  description: string;
  name?: string;
}

const displayedColumn: DisplayedColumn[] = [
  {
    name: 'timestamp',
    label: 'Timestamp',
  },
  {
    name: 'category',
    label: 'Category',
  },
  {
    name: 'description',
    label: 'description',
  },
  {
    name: 'name',
    label: 'Name',
  },
];

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
})
export class LogComponent implements OnInit {
  displayedColumns: DisplayedColumn[] = displayedColumn;
  logData: Observable<LogItem[]>;

  formFields: FormField[] = [
    new FormField({
      name: 'date',
      required: false,
      type: FieldType.DATE,
      placeholder: 'Choose date',
    }),
    new FormField({
      name: 'category',
      required: true,
      type: FieldType.DROPDOWN,
      placeholder: 'Choose category',
      maxWidth: '100%',
      options: ['category 1', 'category 2', 'category 3', 'category 4', 'category 5', 'category 6'],
    }),
  ];
  formGroup: FormGroup;

  constructor(
    private logDialogService: LogDialogService,
    private modal: NgbModal,
    private mockDataService: MockDataService,
    private formFieldsService: FormFieldsService,
  ) {
    this.logData = mockDataService.fetchLogData().pipe(take(1));
    this.formGroup = formFieldsService.getFormGroup(this.formFields);
  }

  ngOnInit(): void {}

  openCreateDialog() {
    this.logDialogService.create();
  }

  openEditDialog(log: object) {
    this.logDialogService.edit(log as LogItem);
  }

  delete(): void {
    const config: NgbModalOptions = {
      centered: true,
    };

    const dataConfig: ConfirmDialogConfig = {
      title: 'Delete log entry',
      message: 'Do you really want to delete the selected log entries?',
    };

    const modalRef = this.modal.open(ConfirmDialogComponent, config);
    modalRef.componentInstance.data = dataConfig;
  }
}
