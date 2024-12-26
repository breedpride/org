import { PageSummary } from '../creatio.response.type';
import { PublicPetTitle } from './extended';
import { PublicHealthExam } from './extended/HealthExam';
import { PublicPedigreePet } from './extended/PedigreePet';
import { PublicPet } from './extended/Pet';
import { PublicShowResult } from './extended/ShowResult';
export interface PetLink {
  ingrus: any[];
}
export interface PetIdentifier2 {
  Id: string;
  Type: { Code: string; Id: string; Name: string };
  Value: string;
}
export type PetTimeline = {
  Text: string;
  Type: {
    Name: string;
    Id: string;
  };
  Date: string;
  PublicationDate: string;
  Name: string;
  Id: string;
};

export interface PetPage extends PublicPet {
  AvailableForSale?: boolean;
  Children?: PublicPet[];
  HasNotes: boolean;
  HealthExams?: PublicHealthExam[];
  HealthList?: PublicHealthExam[];
  IdMarking?: any;
  IdMarkings?: any[];
  Links?: PetLink;
  Pedigree?: PublicPedigreePet;
  PedigreeNumbers?: any[];
  PetIdentifiers: PetIdentifier2[];
  PetTitles: PublicPetTitle[];
  ServiceFeatures?: any[];
  ShowResults?: PublicShowResult[];
  Siblings?: PublicPet[];
  summaryData?: PageSummary;
  VerificationStatus: { Id: string; Name: string };
  Weight?: any;
  Timeline?: PetTimeline[];
}
