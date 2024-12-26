import { Pipe, PipeTransform } from '@angular/core';

// const formmat = 'short';
@Pipe({ name: 'appDateLocale', standalone: true })
export class DateLocalePipe implements PipeTransform {
  //TODO - use user Locale
  transform(value: Date | string | undefined, o?: string, l?: string): string {
    let options: Intl.DateTimeFormatOptions;
    if (o === 'short') {
      options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    } else {
      options = { day: 'numeric', month: 'long', year: 'numeric' };
    }
    const locale: string = l || 'en-US';
    // return this.dateOfBirth.toLocaleDateString('en-US');
    // const value = value;
    // DateTimeFormatOptions
    if (value instanceof Date && !isNaN(value.getTime())) {
      // const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(value);
      // const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(value);
      // const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(value);
      return value.toLocaleDateString(locale, options);
    } else {
      return '-';
    }
  }
}
