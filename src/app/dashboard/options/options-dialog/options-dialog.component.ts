import { Component, Input, OnInit } from '@angular/core';

import { OptionsType } from '@app/core/services/options.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-options-dialog',
  templateUrl: './options-dialog.component.html',
  styleUrls: ['./options-dialog.component.scss'],
})
export class OptionsDialogComponent implements OnInit {
  @Input() data!: OptionsType;

  constructor(public modal: NgbActiveModal) {}

  ngOnInit(): void {}
}
