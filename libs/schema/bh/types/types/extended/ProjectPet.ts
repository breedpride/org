import { PetInProject } from '@bh/entity/config';
import { PublicContact } from './Contact';
// import { PetQualification } from './PetQualification';
import { PublicPlace } from './Place';

export interface PublicProjectPet extends PetInProject {
  Handler: PublicContact;
  Judge: PublicContact;
  PageTemplateCode: string;
  Place: PublicPlace;

  // public qualification: PetQualification;
  Result: string;
  RingNmber: number;
  Url: string;
  WebLink: string;
}
