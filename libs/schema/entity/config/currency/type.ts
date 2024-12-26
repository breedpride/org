
import { Contact } from '../contact/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type Currency_Schema = {
  Id: string;
  CreatedOn: Date;
  CreatedBy: Contact;
  ModifiedOn: Date;
  ModifiedBy: Contact;
  Name: string;
  Description: string;
  Code: string;
  ShortName: string;
  Symbol: string;
  RecalcDirection: number;
  Division: number;
  CurrecySymbolPosition: number;
  Rate: number
};


export type  Currency = Partial< Currency_Schema>;

export function  Currency<T extends Partial< Currency>>(config: T): T;

export function  Currency<T extends Partial< Currency>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  Currency<T extends Partial< Currency> | Partial< Currency>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
