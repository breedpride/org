

import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type Unit_Schema = {
  Id: string;
  Name: string;
  Description: string;
  ShortName: string
};


export type  Unit = Partial< Unit_Schema>;

export function  Unit<T extends Partial< Unit>>(config: T): T;

export function  Unit<T extends Partial< Unit>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  Unit<T extends Partial< Unit> | Partial< Unit>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
