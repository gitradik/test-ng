import { Component, Input, OnInit } from '@angular/core';

export enum PartItemState {
  ERROR = 'error',
  WARNING = 'warning',
  SUCCESS = 'success',
}

@Component({
  selector: 'app-part-item-state',
  templateUrl: './part-item-state.component.html',
  styleUrls: ['./part-item-state.component.scss'],
})
export class PartItemStateComponent implements OnInit {
  @Input() partItemState?: PartItemState;

  partItemStateType = PartItemState;

  constructor() {}

  ngOnInit(): void {}

  activeState(state: PartItemState): boolean {
    return this.partItemState === state;
  }
}
