import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

export interface DisplayedColumn {
  name: string;
  label: string;
}

export type TableData<T> = {
  [K in keyof T]: object;
};

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() data?: TableData<object[]>;
  @Input() displayedColumns?: DisplayedColumn[];
  @Input() actionsTemplate!: TemplateRef<unknown>;
  @Output() create: EventEmitter<void> = new EventEmitter();
  @Output() edit: EventEmitter<object> = new EventEmitter();
  @Output() delete: EventEmitter<object> = new EventEmitter();

  model?: NgbDateStruct;

  constructor() {}

  ngOnInit(): void {}
}
