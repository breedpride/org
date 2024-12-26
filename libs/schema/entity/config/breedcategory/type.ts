

import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type BreedCategory_Schema = {
  Id: string;
  Name: string;
  Description: string
};


export type  BreedCategory = Partial< BreedCategory_Schema>;

export function  BreedCategory<T extends Partial< BreedCategory>>(config: T): T;

export function  BreedCategory<T extends Partial< BreedCategory>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  BreedCategory<T extends Partial< BreedCategory> | Partial< BreedCategory>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
