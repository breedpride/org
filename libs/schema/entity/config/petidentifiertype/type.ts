

import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type PetIdentifierType_Schema = {
  Id: string;
  Name: string;
  Description: string;
  IsPublic: boolean
};


export type  PetIdentifierType = Partial< PetIdentifierType_Schema>;

export function  PetIdentifierType<T extends Partial< PetIdentifierType>>(config: T): T;

export function  PetIdentifierType<T extends Partial< PetIdentifierType>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  PetIdentifierType<T extends Partial< PetIdentifierType> | Partial< PetIdentifierType>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
