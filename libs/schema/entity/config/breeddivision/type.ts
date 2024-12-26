
import { Breed } from '../breed/type';import { BreedStandard } from '../breedstandard/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type BreedDivision_Schema = {
  Id: string;
  Name: string;
  Description: string;
  DivisionByColor: boolean;
  Breed: Breed;
  IsMain: boolean;
  DivisionByBodyFeature: boolean;
  DivisionBySize: boolean;
  DivisionByCoatType: boolean;
  BreedStandard: BreedStandard
};


export type  BreedDivision = Partial< BreedDivision_Schema>;

export function  BreedDivision<T extends Partial< BreedDivision>>(config: T): T;

export function  BreedDivision<T extends Partial< BreedDivision>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  BreedDivision<T extends Partial< BreedDivision> | Partial< BreedDivision>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
