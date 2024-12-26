
import { BreedSection } from '../breedsection/type';import { BreedGroup } from '../breedgroup/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type BreedSubsection_Schema = {
  Id: string;
  Name: string;
  Description: string;
  BreedSection: BreedSection;
  BreedGroup: BreedGroup;
  Code: number
};


export type  BreedSubsection = Partial< BreedSubsection_Schema>;

export function  BreedSubsection<T extends Partial< BreedSubsection>>(config: T): T;

export function  BreedSubsection<T extends Partial< BreedSubsection>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  BreedSubsection<T extends Partial< BreedSubsection> | Partial< BreedSubsection>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
