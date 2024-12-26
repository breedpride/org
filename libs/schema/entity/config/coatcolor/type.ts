
import { PetType } from '../pettype/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type CoatColor_Schema = {
  Id: string;
  Name: string;
  Description: string;
  PetType: PetType
};


export type  CoatColor = Partial< CoatColor_Schema>;

export function  CoatColor<T extends Partial< CoatColor>>(config: T): T;

export function  CoatColor<T extends Partial< CoatColor>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  CoatColor<T extends Partial< CoatColor> | Partial< CoatColor>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
