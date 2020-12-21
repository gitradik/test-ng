import { Component, OnInit, Input } from '@angular/core';
import { NgbDate, NgbCalendar, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormField } from '../form-fields/form-field.class';
import { FormControl } from '@angular/forms';

export interface RangeDateTimePickerValue {
  fromDate: NgbDate;
  toDate: NgbDate;
  fromTime: NgbTimeStruct;
  toTime: NgbTimeStruct;
}

@Component({
  selector: 'app-range-date-time-picker',
  templateUrl: './range-date-time-picker.component.html',
  styleUrls: ['./range-date-time-picker.component.scss'],
})
export class RangeDateTimePickerComponent implements OnInit {
  @Input() field?: FormField;

  control!: FormControl;

  hoveredDate: NgbDate | null = null;

  fromDate!: NgbDate;
  toDate: NgbDate | null = null;

  fromTime: NgbTimeStruct = { hour: 0, minute: 0, second: 0 };
  toTime: NgbTimeStruct = { hour: 0, minute: 0, second: 0 };

  constructor(private calendar: NgbCalendar) {}

  ngOnInit(): void {
    if (this.field) {
      this.control = this.field.formControl as FormControl;
      const value: RangeDateTimePickerValue = this.control.value;
      if (value) {
        this.fromDate = value.fromDate;
        this.toDate = value.toDate;
        this.fromTime = value.fromTime;
        this.toTime = value.toTime;
      } else {
        this.fromDate = this.calendar.getToday();
        this.toDate = this.calendar.getNext(this.calendar.getToday(), 'd', 10);
      }
    }
  }

  onDateSelection(date: NgbDate): void {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }

    this.setDateTimeValues();
  }

  setDateTimeValues(): void {
    this.control.setValue({
      fromDate: this.fromDate,
      fromTime: this.fromTime,
      toDate: this.toDate,
      toTime: this.toTime,
    } as RangeDateTimePickerValue);
  }

  isHovered(date: NgbDate): boolean | null {
    return (
      this.fromDate &&
      !this.toDate &&
      this.hoveredDate &&
      date.after(this.fromDate) &&
      date.before(this.hoveredDate)
    );
  }

  isInside(date: NgbDate): boolean | null {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate): boolean | null {
    return (
      date.equals(this.fromDate) ||
      (this.toDate && date.equals(this.toDate)) ||
      this.isInside(date) ||
      this.isHovered(date)
    );
  }
}
