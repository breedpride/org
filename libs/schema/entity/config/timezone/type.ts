
import { Contact } from '../contact/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type TimeZone_Schema = {
  Id: string;
  CreatedOn: Date;
  CreatedBy: Contact;
  ModifiedOn: Date;
  ModifiedBy: Contact;
  Name: string;
  Description: string;
  Code: string;
  Offset: string;
  CodeAmerican: string
};


export type  TimeZone = Partial< TimeZone_Schema>;

export function  TimeZone<T extends Partial< TimeZone>>(config: T): T;

export function  TimeZone<T extends Partial< TimeZone>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  TimeZone<T extends Partial< TimeZone> | Partial< TimeZone>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
