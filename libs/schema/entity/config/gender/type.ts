
import { Contact } from '../contact/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type Gender_Schema = {
  Id: string;
  CreatedOn: Date;
  CreatedBy: Contact;
  ModifiedOn: Date;
  ModifiedBy: Contact;
  Name: string;
  Description: string;
  Order: number
};


export type  Gender = Partial< Gender_Schema>;

export function  Gender<T extends Partial< Gender>>(config: T): T;

export function  Gender<T extends Partial< Gender>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  Gender<T extends Partial< Gender> | Partial< Gender>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
