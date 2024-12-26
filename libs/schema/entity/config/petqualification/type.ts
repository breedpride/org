
import { PetType } from '../pettype/type';import { Account } from '../account/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type PetQualification_Schema = {
  Id: string;
  Name: string;
  Description: string;
  PetType: PetType;
  Code: number;
  Provider: Account
};


export type  PetQualification = Partial< PetQualification_Schema>;

export function  PetQualification<T extends Partial< PetQualification>>(config: T): T;

export function  PetQualification<T extends Partial< PetQualification>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  PetQualification<T extends Partial< PetQualification> | Partial< PetQualification>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
