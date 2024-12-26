
import { PetType } from '../pettype/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type PetSize_Schema = {
  Id: string;
  Name: string;
  Description: string;
  PetType: PetType
};


export type  PetSize = Partial< PetSize_Schema>;

export function  PetSize<T extends Partial< PetSize>>(config: T): T;

export function  PetSize<T extends Partial< PetSize>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  PetSize<T extends Partial< PetSize> | Partial< PetSize>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
