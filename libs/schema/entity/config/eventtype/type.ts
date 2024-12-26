
import { Contact } from '../contact/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type EventType_Schema = {
  Id: string;
  Name: string;
  CreatedOn: Date;
  CreatedBy: Contact;
  ModifiedOn: Date;
  ModifiedBy: Contact;
  Description: string
};


export type  EventType = Partial< EventType_Schema>;

export function  EventType<T extends Partial< EventType>>(config: T): T;

export function  EventType<T extends Partial< EventType>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  EventType<T extends Partial< EventType> | Partial< EventType>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
