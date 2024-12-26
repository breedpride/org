import { Pipe, PipeTransform } from '@angular/core';
export type WithAvatar = {
  AvatarUrl?: string;
};
export const kennelAvatarFn = (kennel: WithAvatar): string =>
  kennel?.AvatarUrl ?? 'assets/images/pettypes/dog.jpeg';
@Pipe({
  name: 'kennelAvatar',
  standalone: true,
})
export class KennelAvatarPipe implements PipeTransform {
  transform = (kennel: WithAvatar) => kennelAvatarFn(kennel);
}
