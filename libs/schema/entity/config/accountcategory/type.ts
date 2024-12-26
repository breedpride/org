

import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type AccountCategory_Schema = {
  Id: string;
  Name: string;
  Description: string
};


export type  AccountCategory = Partial< AccountCategory_Schema>;

export function  AccountCategory<T extends Partial< AccountCategory>>(config: T): T;

export function  AccountCategory<T extends Partial< AccountCategory>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  AccountCategory<T extends Partial< AccountCategory> | Partial< AccountCategory>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
