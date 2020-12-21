import { Pipe, PipeTransform } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Pipe({
  name: 'dateFormat',
})
export class DateFormatPipe implements PipeTransform {
  transform(date: NgbDate | null): string {
    if (!date) {
      return '';
    }

    return (
      this.singleValueConvert(date.day) +
      '.' +
      this.singleValueConvert(date.month) +
      '.' +
      date.year
    );
  }

  private singleValueConvert(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }
}
