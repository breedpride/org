

import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type AccountStatus_Schema = {
  Id: string;
  Name: string;
  Description: string
};


export type  AccountStatus = Partial< AccountStatus_Schema>;

export function  AccountStatus<T extends Partial< AccountStatus>>(config: T): T;

export function  AccountStatus<T extends Partial< AccountStatus>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  AccountStatus<T extends Partial< AccountStatus> | Partial< AccountStatus>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
