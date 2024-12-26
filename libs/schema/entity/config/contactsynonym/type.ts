
import { Contact } from '../contact/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type ContactSynonym_Schema = {
  Id: string;
  Name: string;
  Contact: Contact
};


export type  ContactSynonym = Partial< ContactSynonym_Schema>;

export function  ContactSynonym<T extends Partial< ContactSynonym>>(config: T): T;

export function  ContactSynonym<T extends Partial< ContactSynonym>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  ContactSynonym<T extends Partial< ContactSynonym> | Partial< ContactSynonym>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
