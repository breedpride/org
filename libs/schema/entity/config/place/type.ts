

import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type Place_Schema = {
  Id: string;
  Name: string;
  Description: string
};


export type  Place = Partial< Place_Schema>;

export function  Place<T extends Partial< Place>>(config: T): T;

export function  Place<T extends Partial< Place>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  Place<T extends Partial< Place> | Partial< Place>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
