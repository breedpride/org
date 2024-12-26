import { Contact, VerificationStatus } from '@bh/entity/config';
export type BreedPatronage = {
  Breed: { Id: string; Name: string };
  Place: number;
};
export interface PublicContact extends Contact {
  BreedPatronage?: BreedPatronage[];
  HasNotes: boolean;
  HasUser?: boolean;
  TierMarks: any[];
  VerificationStatus?: VerificationStatus;
  Career?: { Breeder: boolean; Judge: boolean };
}
