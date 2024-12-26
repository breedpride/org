
import { PetService } from '@bh/entity/config';
import { PublicPedigreePet } from './PedigreePet';
export type PublicPet = PublicPedigreePet;
export type PublicPetWithPlugins = PublicPedigreePet & {
  HasNotes: boolean;
  Services: PetService[];
  TierMarks: any[];
};
