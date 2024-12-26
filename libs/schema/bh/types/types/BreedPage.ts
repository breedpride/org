import { Account } from '@bh/entity/config';
import { Contact } from '@bh/entity/config';
import { Pet } from '@bh/entity/config';
import { PageSummary } from '../creatio.response.type';

import { PublicBreed } from './extended/Breed';
import { PublicContact } from './extended/Contact';
import { PublicKennel } from './extended/Kennel';
import { PublicPet } from './extended/Pet';

export type BreedAchievement = {
  Active: boolean;
  Date: Date;
  Description: string;
  Name: string;
  Position: number;
};

export type BreedPage = PublicBreed & {
  AchievementCount: number;
  Achievements: BreedAchievement[];
  ActualAchievent: BreedAchievement;
  HasNotes: boolean;
  MajorPatron: Contact;
  Patrons: PublicContact[]; // TODO - top N patrons maybe sorted by tier and duration of subscription
  Standarts: any[]; // TODO - rework
  summaryData?: PageSummary;
  TopKennel: Account;
  TopKennels: PublicKennel[];
  TopPet: Pet;
  TopPets: PublicPet[];
};
