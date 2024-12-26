
import { PetType } from '../pettype/type';import { Account } from '../account/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type PetClass_Schema = {
  Id: string;
  Name: string;
  Description: string;
  AgeTo: number;
  AgeFrom: number;
  Code: number;
  PetType: PetType;
  Provider: Account
};


export type  PetClass = Partial< PetClass_Schema>;

export function  PetClass<T extends Partial< PetClass>>(config: T): T;

export function  PetClass<T extends Partial< PetClass>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  PetClass<T extends Partial< PetClass> | Partial< PetClass>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
