

import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type StudbookType_Schema = {
  Id: string;
  Name: string;
  Description: string
};


export type  StudbookType = Partial< StudbookType_Schema>;

export function  StudbookType<T extends Partial< StudbookType>>(config: T): T;

export function  StudbookType<T extends Partial< StudbookType>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  StudbookType<T extends Partial< StudbookType> | Partial< StudbookType>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
