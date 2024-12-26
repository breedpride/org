import { Pet, PetService, VerificationStatus } from '@bh/entity/config';
import { PublicPetTitle } from './PetTitle';

export interface PublicPedigreePet extends Pet {
  AvailableForSale?: boolean;
  CountryOfBirthCode?: string;
  HasNotes?: boolean;
  PetTitles?: PublicPetTitle[];
  ServiceFeatures?: any[];
  Services?: PetService[];
  TierMarks?: any[];
  VerificationStatus?: VerificationStatus;
}
