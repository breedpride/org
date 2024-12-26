

import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type LitterStatus_Schema = {
  Id: string;
  Name: string;
  Description: string;
  Order: number
};


export type  LitterStatus = Partial< LitterStatus_Schema>;

export function  LitterStatus<T extends Partial< LitterStatus>>(config: T): T;

export function  LitterStatus<T extends Partial< LitterStatus>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  LitterStatus<T extends Partial< LitterStatus> | Partial< LitterStatus>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
