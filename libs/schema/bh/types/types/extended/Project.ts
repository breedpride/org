import { Project } from '@bh/entity/config';
import { PublicAccount } from './Account';
import { PublicProjectPet } from './ProjectPet';
import { PublicEvent } from './TheEvent';

export interface PublicProject extends Project {
  Account: PublicAccount;
  CityName: string;
  CountryCode: string;
  EndDate: Date;
  Event: PublicEvent;
  // Owner: Contact;
  Participants: PublicProjectPet[];
  StartDate: Date;
  Url: string;
}
