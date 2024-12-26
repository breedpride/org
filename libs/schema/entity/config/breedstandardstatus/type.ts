
import { Account } from '../account/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type BreedStandardStatus_Schema = {
  Id: string;
  Name: string;
  Description: string;
  Provider: Account
};


export type  BreedStandardStatus = Partial< BreedStandardStatus_Schema>;

export function  BreedStandardStatus<T extends Partial< BreedStandardStatus>>(config: T): T;

export function  BreedStandardStatus<T extends Partial< BreedStandardStatus>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  BreedStandardStatus<T extends Partial< BreedStandardStatus> | Partial< BreedStandardStatus>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
