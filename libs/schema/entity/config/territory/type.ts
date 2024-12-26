

import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type Territory_Schema = {
  Id: string;
  Name: string;
  Description: string
};


export type  Territory = Partial< Territory_Schema>;

export function  Territory<T extends Partial< Territory>>(config: T): T;

export function  Territory<T extends Partial< Territory>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  Territory<T extends Partial< Territory> | Partial< Territory>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
