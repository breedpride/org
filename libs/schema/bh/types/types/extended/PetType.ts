import { PetType } from '@bh/entity/config';
import { PublicBreed } from './Breed';
export interface PublicPetType extends PetType {
  Breeds: PublicBreed[];
}
