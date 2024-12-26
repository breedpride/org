
import { Contact } from '../contact/type';import { BreedprideCollection } from '../breedpridecollection/type';import { Account } from '../account/type';import { Event } from '../event/type';import { Pet } from '../pet/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type BreedprideCollectionEntity_Schema = {
  Id: string;
  CreatedOn: Date;
  CreatedBy: Contact;
  ModifiedOn: Date;
  ModifiedBy: Contact;
  RecordId: string;
  Collection: BreedprideCollection;
  Contact: Contact;
  Account: Account;
  Event: Event;
  Pet: Pet
};


export type  BreedprideCollectionEntity = Partial< BreedprideCollectionEntity_Schema>;

export function  BreedprideCollectionEntity<T extends Partial< BreedprideCollectionEntity>>(config: T): T;

export function  BreedprideCollectionEntity<T extends Partial< BreedprideCollectionEntity>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  BreedprideCollectionEntity<T extends Partial< BreedprideCollectionEntity> | Partial< BreedprideCollectionEntity>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
