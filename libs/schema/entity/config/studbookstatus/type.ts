

import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type StudbookStatus_Schema = {
  Id: string;
  Name: string;
  Description: string
};


export type  StudbookStatus = Partial< StudbookStatus_Schema>;

export function  StudbookStatus<T extends Partial< StudbookStatus>>(config: T): T;

export function  StudbookStatus<T extends Partial< StudbookStatus>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  StudbookStatus<T extends Partial< StudbookStatus> | Partial< StudbookStatus>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
