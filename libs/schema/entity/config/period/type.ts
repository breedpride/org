
import { PeriodType } from '../periodtype/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type Period_Schema = {
  Id: string;
  Name: string;
  Description: string;
  StartDate: Date;
  DueDate: Date;
  PeriodType: PeriodType;
  Year: Period;
  Quarter: Period;
  Parent: Period
};


export type  Period = Partial< Period_Schema>;

export function  Period<T extends Partial< Period>>(config: T): T;

export function  Period<T extends Partial< Period>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  Period<T extends Partial< Period> | Partial< Period>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
