import { Pipe, PipeTransform } from '@angular/core';
import { PublicBreed } from '@bh/types';

export const breedAvatarFn = (breed: PublicBreed): string =>
  // 'assets/images/breeds/chihuahua.png';
  breed?.AvatarUrl ?? 'assets/images/pettypes/dog.jpeg';
@Pipe({
  name: 'breedAvatar',
  standalone: true,
})
export class BreedAvatarPipe implements PipeTransform {
  transform = (breed: PublicBreed) => breedAvatarFn(breed);
}
