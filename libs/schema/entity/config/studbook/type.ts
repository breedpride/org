
import { Account } from '../account/type';import { StudbookStatus } from '../studbookstatus/type';import { StudbookType } from '../studbooktype/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type Studbook_Schema = {
  Id: string;
  Name: string;
  Description: string;
  Account: Account;
  Status: StudbookStatus;
  Type: StudbookType;
  AlternateNames: string
};


export type  Studbook = Partial< Studbook_Schema>;

export function  Studbook<T extends Partial< Studbook>>(config: T): T;

export function  Studbook<T extends Partial< Studbook>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  Studbook<T extends Partial< Studbook> | Partial< Studbook>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
