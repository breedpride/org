
import { PetType } from '../pettype/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type CoatType_Schema = {
  Id: string;
  Name: string;
  Description: string;
  PetType: PetType
};


export type  CoatType = Partial< CoatType_Schema>;

export function  CoatType<T extends Partial< CoatType>>(config: T): T;

export function  CoatType<T extends Partial< CoatType>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  CoatType<T extends Partial< CoatType> | Partial< CoatType>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
