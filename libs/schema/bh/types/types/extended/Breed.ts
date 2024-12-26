import { Breed } from '@bh/entity/config';

export type PublicBreed = Breed;

export type BreedWithPlugins = Breed & {
  AchievementProgress: number;
  Achievements?: any[];
  HasNotes: boolean;
  PatronCount: number;
  TopPatrons: any[];
};
