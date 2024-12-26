
import { Contact } from '../contact/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type EventStatus_Schema = {
  Id: string;
  Name: string;
  CreatedOn: Date;
  CreatedBy: Contact;
  ModifiedOn: Date;
  ModifiedBy: Contact;
  Description: string;
  Color: string
};


export type  EventStatus = Partial< EventStatus_Schema>;

export function  EventStatus<T extends Partial< EventStatus>>(config: T): T;

export function  EventStatus<T extends Partial< EventStatus>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  EventStatus<T extends Partial< EventStatus> | Partial< EventStatus>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
