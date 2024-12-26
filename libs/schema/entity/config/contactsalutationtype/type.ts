
import { Contact } from '../contact/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type ContactSalutationType_Schema = {
  Id: string;
  CreatedOn: Date;
  CreatedBy: Contact;
  ModifiedOn: Date;
  ModifiedBy: Contact;
  Name: string;
  Description: string
};


export type  ContactSalutationType = Partial< ContactSalutationType_Schema>;

export function  ContactSalutationType<T extends Partial< ContactSalutationType>>(config: T): T;

export function  ContactSalutationType<T extends Partial< ContactSalutationType>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  ContactSalutationType<T extends Partial< ContactSalutationType> | Partial< ContactSalutationType>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
