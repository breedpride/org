

import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type PeriodType_Schema = {
  Id: string;
  Name: string;
  Description: string
};


export type  PeriodType = Partial< PeriodType_Schema>;

export function  PeriodType<T extends Partial< PeriodType>>(config: T): T;

export function  PeriodType<T extends Partial< PeriodType>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  PeriodType<T extends Partial< PeriodType> | Partial< PeriodType>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
