
import { Contact } from '../contact/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type EntitySchemaLookup_Schema = {
  Id: string;
  CreatedOn: Date;
  CreatedBy: Contact;
  ModifiedOn: Date;
  ModifiedBy: Contact;
  Name: string;
  Description: string;
  IsPublic: boolean;
  PublicName: string
};


export type  EntitySchemaLookup = Partial< EntitySchemaLookup_Schema>;

export function  EntitySchemaLookup<T extends Partial< EntitySchemaLookup>>(config: T): T;

export function  EntitySchemaLookup<T extends Partial< EntitySchemaLookup>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  EntitySchemaLookup<T extends Partial< EntitySchemaLookup> | Partial< EntitySchemaLookup>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
