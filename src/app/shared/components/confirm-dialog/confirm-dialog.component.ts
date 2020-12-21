import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

export interface ConfirmDialogConfig {
  title: string;
  message: string;
}

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent implements OnInit {
  @Input() data!: ConfirmDialogConfig;

  constructor(public modal: NgbActiveModal) {}

  ngOnInit(): void {}
}
