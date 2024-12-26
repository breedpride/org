import { Pipe, PipeTransform } from '@angular/core';
import { Breed, Pet } from '@bh/entity/config';
import { PublicPet } from '@bh/types';

export type WithAvatarUrlAndBreed = {
  AvatarUrl: string;
  Breed: Breed;
};
export const petAvatarFn = (pet: Pet | PublicPet | undefined | null): string =>
  pet?.AvatarUrl || pet?.Breed?.AvatarUrl || 'assets/images/pettypes/dog.jpeg';
@Pipe({
  name: 'petAvatar',
  standalone: true,
})
export class PetAvatarPipe implements PipeTransform {
  transform = (pet: Pet | PublicPet | undefined | null): string =>
    petAvatarFn(pet);
}
