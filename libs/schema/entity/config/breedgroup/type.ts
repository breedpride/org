
import { Account } from '../account/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type BreedGroup_Schema = {
  Id: string;
  Name: string;
  Description: string;
  Code: number;
  Provider: Account
};


export type  BreedGroup = Partial< BreedGroup_Schema>;

export function  BreedGroup<T extends Partial< BreedGroup>>(config: T): T;

export function  BreedGroup<T extends Partial< BreedGroup>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  BreedGroup<T extends Partial< BreedGroup> | Partial< BreedGroup>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
