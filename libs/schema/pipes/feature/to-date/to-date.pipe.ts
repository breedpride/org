import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toDate',
  standalone: true,
})
export class ToDatePipe implements PipeTransform {
  transform(value: Date | string | undefined): Date | string | undefined {
    return value ? (value instanceof Date ? value : new Date(value)) : value;
    // && value instanceof Date
    // ? value
    // : value
    //   ? new Date(value)
    //   : value;
  }
}
