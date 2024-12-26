

import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type Letter_Schema = {
  Id: string;
  Name: string;
  Description: string
};


export type  Letter = Partial< Letter_Schema>;

export function  Letter<T extends Partial< Letter>>(config: T): T;

export function  Letter<T extends Partial< Letter>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  Letter<T extends Partial< Letter> | Partial< Letter>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
