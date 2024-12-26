
import { Contact } from '../contact/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type PostState_Schema = {
  Id: string;
  CreatedOn: Date;
  CreatedBy: Contact;
  ModifiedOn: Date;
  ModifiedBy: Contact;
  Name: string;
  Description: string
};


export type  PostState = Partial< PostState_Schema>;

export function  PostState<T extends Partial< PostState>>(config: T): T;

export function  PostState<T extends Partial< PostState>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  PostState<T extends Partial< PostState> | Partial< PostState>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
