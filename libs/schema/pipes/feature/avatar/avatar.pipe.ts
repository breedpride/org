import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avatar',
  standalone: true,
})
export class AvatarPipe implements PipeTransform {
  transform(value: any, pipeFn: any): any {
    if (!pipeFn) {
      return value;
    } else {
      return pipeFn(value);
    }
  }
}
