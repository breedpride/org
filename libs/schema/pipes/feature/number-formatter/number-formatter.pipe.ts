import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormatter',
  standalone: true,
})
export class NumberFormatterPipe implements PipeTransform {
  transform(value: number): unknown {
    return String(value).replace(/(?!^)(?=(?:\d{3})+$)/g, ' ');
  }
}
