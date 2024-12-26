
import { Contact } from '../contact/type';import { Pet } from '../pet/type';import { Project } from '../project/type';import { Event } from '../event/type';import { Account } from '../account/type';import { Breed } from '../breed/type';import { Cover } from '../cover/type';import { EntitySchemaLookup } from '../entityschemalookup/type';import { Litter } from '../litter/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type Note_Schema = {
  Id: string;
  CreatedOn: Date;
  CreatedBy: Contact;
  ModifiedOn: Date;
  ModifiedBy: Contact;
  Name: string;
  Notes: string;
  Pet: Pet;
  Project: Project;
  Event: Event;
  Contact: Contact;
  Account: Account;
  Breed: Breed;
  Owner: Contact;
  Cover: Cover;
  RecordId: string;
  EntitySchema: EntitySchemaLookup;
  Litter: Litter
};


export type  Note = Partial< Note_Schema>;

export function  Note<T extends Partial< Note>>(config: T): T;

export function  Note<T extends Partial< Note>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  Note<T extends Partial< Note> | Partial< Note>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
