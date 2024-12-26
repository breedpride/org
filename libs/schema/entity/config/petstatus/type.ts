
import { PetType } from '../pettype/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type PetStatus_Schema = {
  Id: string;
  Name: string;
  Description: string;
  Code: string;
  PetType: PetType
};


export type  PetStatus = Partial< PetStatus_Schema>;

export function  PetStatus<T extends Partial< PetStatus>>(config: T): T;

export function  PetStatus<T extends Partial< PetStatus>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  PetStatus<T extends Partial< PetStatus> | Partial< PetStatus>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
