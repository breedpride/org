import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateYear',
  standalone: true,
})
export class DateYearPipe implements PipeTransform {
  transform(value: Date | string | undefined): unknown {
    return value ? new Date(value).getFullYear().toString() : '-';
  }
}
