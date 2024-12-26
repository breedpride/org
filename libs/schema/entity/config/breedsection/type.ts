
import { BreedGroup } from '../breedgroup/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type BreedSection_Schema = {
  Id: string;
  Name: string;
  Description: string;
  Code: number;
  BreedGroup: BreedGroup
};


export type  BreedSection = Partial< BreedSection_Schema>;

export function  BreedSection<T extends Partial< BreedSection>>(config: T): T;

export function  BreedSection<T extends Partial< BreedSection>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  BreedSection<T extends Partial< BreedSection> | Partial< BreedSection>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
