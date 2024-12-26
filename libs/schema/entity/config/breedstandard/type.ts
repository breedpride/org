
import { BreedSubsection } from '../breedsubsection/type';import { BreedSection } from '../breedsection/type';import { BreedGroup } from '../breedgroup/type';import { Account } from '../account/type';import { Breed } from '../breed/type';import { BreedStandardStatus } from '../breedstandardstatus/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type BreedStandard_Schema = {
  Id: string;
  Subsection: BreedSubsection;
  Section: BreedSection;
  Group: BreedGroup;
  Code: string;
  Provider: Account;
  Breed: Breed;
  Effective: Date;
  Approved: Date;
  Link: string;
  WorkingTrial: boolean;
  Status: BreedStandardStatus;
  HasVariableDivisions: boolean;
  Name: string
};


export type  BreedStandard = Partial< BreedStandard_Schema>;

export function  BreedStandard<T extends Partial< BreedStandard>>(config: T): T;

export function  BreedStandard<T extends Partial< BreedStandard>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  BreedStandard<T extends Partial< BreedStandard> | Partial< BreedStandard>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
