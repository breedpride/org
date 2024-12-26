

import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type CoverType_Schema = {
  Id: string;
  Name: string;
  Description: string;
  Priority: number;
  System: boolean
};


export type  CoverType = Partial< CoverType_Schema>;

export function  CoverType<T extends Partial< CoverType>>(config: T): T;

export function  CoverType<T extends Partial< CoverType>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  CoverType<T extends Partial< CoverType> | Partial< CoverType>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
