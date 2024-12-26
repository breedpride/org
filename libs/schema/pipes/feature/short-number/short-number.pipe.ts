import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'shortNumber', standalone: true })
export class ShortNumberPipe implements PipeTransform {
  //TODO - use user Locale
  transform(value: number): string {
    // function nFormatter(num, digits) {
    const digits = 1;
    const lookup = [
      { symbol: '', value: 1 },
      { symbol: 'k', value: 1e3 },
      { symbol: 'M', value: 1e6 },
      { symbol: 'G', value: 1e9 },
      { symbol: 'T', value: 1e12 },
      { symbol: 'P', value: 1e15 },
      { symbol: 'E', value: 1e18 },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    const item = lookup
      .slice()
      .reverse()
      .find(e => value >= e.value);
    return item
      ? (value / item.value).toFixed(digits).replace(rx, '$1') + item.symbol
      : '0';
  }
}
