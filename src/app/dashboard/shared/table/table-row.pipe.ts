import { Pipe, PipeTransform } from '@angular/core';

interface TableRow {
  name: string;
  value: string;
}

@Pipe({
  name: 'tableRow',
})
export class TableRowPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): TableRow[] {
    return Object.keys(value).map(key => ({
      name: key,
      value: value[key],
    }));
  }
}
