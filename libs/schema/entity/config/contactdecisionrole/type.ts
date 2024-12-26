
import { Contact } from '../contact/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type ContactDecisionRole_Schema = {
  Id: string;
  CreatedOn: Date;
  CreatedBy: Contact;
  ModifiedOn: Date;
  ModifiedBy: Contact;
  Name: string;
  Description: string
};


export type  ContactDecisionRole = Partial< ContactDecisionRole_Schema>;

export function  ContactDecisionRole<T extends Partial< ContactDecisionRole>>(config: T): T;

export function  ContactDecisionRole<T extends Partial< ContactDecisionRole>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  ContactDecisionRole<T extends Partial< ContactDecisionRole> | Partial< ContactDecisionRole>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
