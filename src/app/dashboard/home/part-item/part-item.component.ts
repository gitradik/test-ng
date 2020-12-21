import { Component, Input, OnInit } from '@angular/core';
import { PartItemState } from '@app/dashboard/home/part-item/part-item-state/part-item-state.component';

export interface PartItem {
  name: string;
  partName: string;
  img: string;
  state: PartItemState;
}

@Component({
  selector: 'app-part-item',
  templateUrl: './part-item.component.html',
  styleUrls: ['./part-item.component.scss'],
})
export class PartItemComponent implements OnInit {
  @Input() partItem?: PartItem;

  constructor() {}

  ngOnInit(): void {}
}
