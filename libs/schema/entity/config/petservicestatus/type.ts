

import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type PetServiceStatus_Schema = {
  Id: string;
  Name: string;
  Description: string
};


export type  PetServiceStatus = Partial< PetServiceStatus_Schema>;

export function  PetServiceStatus<T extends Partial< PetServiceStatus>>(config: T): T;

export function  PetServiceStatus<T extends Partial< PetServiceStatus>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  PetServiceStatus<T extends Partial< PetServiceStatus> | Partial< PetServiceStatus>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
