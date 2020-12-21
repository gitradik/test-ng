import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit {
  @Input() ngModel!: string;
  @Input() placeholder!: string;
  @Output() ngModelChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
}
