
import { Country } from '../country/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type AccountOwnership_Schema = {
  Id: string;
  Name: string;
  Description: string;
  Country: Country
};


export type  AccountOwnership = Partial< AccountOwnership_Schema>;

export function  AccountOwnership<T extends Partial< AccountOwnership>>(config: T): T;

export function  AccountOwnership<T extends Partial< AccountOwnership>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  AccountOwnership<T extends Partial< AccountOwnership> | Partial< AccountOwnership>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
