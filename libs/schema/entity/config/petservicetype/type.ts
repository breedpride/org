

import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type PetServiceType_Schema = {
  Id: string;
  Name: string;
  Description: string
};


export type  PetServiceType = Partial< PetServiceType_Schema>;

export function  PetServiceType<T extends Partial< PetServiceType>>(config: T): T;

export function  PetServiceType<T extends Partial< PetServiceType>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  PetServiceType<T extends Partial< PetServiceType> | Partial< PetServiceType>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
