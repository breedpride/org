import { Pet, Project } from '@bh/entity/config';

import { PublicAccount } from './extended';
import { PublicEvent } from './extended/TheEvent';
import { PageSummary } from '../creatio.response.type';

export interface EventPage extends PublicEvent {
  Breeds?: {
    BreedCompetitors: any[];
    Id: string;
    Name: string;
    Url: string;
  }[];
  Category?: { Code: string; Id: string; Name: string };
  Country?: { Code: string; Id: string; Name: string };
  HasNotes: boolean;
  Judges: {
    AvatarUrl: string;
    Code: string;
    Id: string;
    Name: string;
    Url: string;
  }[];
  Organizer?: PublicAccount;
  Pet?: Pet;
  Projects?: Project[];
  Status?: { Code: string; Id: string; Name: string };
  summaryData?: PageSummary;
}
