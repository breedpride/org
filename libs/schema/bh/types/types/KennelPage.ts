import { Pet } from '@bh/entity/config';

import { PublicAccount } from './extended/Account';
import { PublicKennel } from './extended/Kennel';
import { PublicPet } from './extended/Pet';
import { PublicRecomendation } from './extended/Recomendation';
import { PublicReview } from './extended/Review';
import { PageSummary } from '../creatio.response.type';

export interface KennelPage extends PublicKennel {
  CompanyFoundationDate: Date;
  Emails: string[];
  Facebooks: string[];
  Federation: {
    AlternativeName: string;
    Name: string;
    Url: string;
  };
  HasNotes: boolean;
  Instagrams: string[];
  KennelBreeds: any[];
  KennelPets: PublicPet[];
  OffspringPets: PublicPet[];
  OurRecomendations: PublicRecomendation[];
  Parents: PublicAccount;
  PetsForSale: PublicPet[];
  Phone: string;
  Reviews: PublicReview[];
  summaryData?: PageSummary;
  TopPet: Pet;
  TopPets: PublicPet[];
  VerificationStatus: { Id: string; Name: string };
  Viber: string;
}
