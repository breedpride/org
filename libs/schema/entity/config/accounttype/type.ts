

import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type AccountType_Schema = {
  Id: string;
  Name: string;
  Description: string;
  RawDataModel: string
};


export type  AccountType = Partial< AccountType_Schema>;

export function  AccountType<T extends Partial< AccountType>>(config: T): T;

export function  AccountType<T extends Partial< AccountType>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  AccountType<T extends Partial< AccountType> | Partial< AccountType>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
