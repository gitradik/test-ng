import { Pipe, PipeTransform } from '@angular/core';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

@Pipe({
  name: 'timeFormat',
})
export class TimeFormatPipe implements PipeTransform {
  transform(time: NgbTimeStruct | null): string {
    if (!time) {
      return '';
    }

    return (
      this.singleValueConvert(time.hour) +
      ':' +
      this.singleValueConvert(time.minute) +
      ':' +
      this.singleValueConvert(time.second)
    );
  }

  private singleValueConvert(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }
}
