import { PageSummary } from '../creatio.response.type';
import { PublicBreed } from './extended/Breed';
import { PublicPetType } from './extended/PetType';

export interface PetTypePage extends PublicPetType {
  Breeds: PublicBreed[];
  EventCount: number;
  KennelCount: number;
  OrganizationCount: number;
  PatronCount: number;
  PetProfileCount: number;
  summaryData?: PageSummary;
}
