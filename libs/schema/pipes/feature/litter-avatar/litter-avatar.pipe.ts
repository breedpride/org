import { Pipe, PipeTransform } from '@angular/core';
export const litterAvatarFn = (pet: any): string => pet?.AvatarUrl ?? null;
@Pipe({
  name: 'litterAvatar',
  standalone: true,
})
export class LitterAvatarPipe implements PipeTransform {
  transform = (litter: any): string => litterAvatarFn(litter);
}
