
import { Contact } from '../contact/type';import { BreedprideCollectionType } from '../breedpridecollectiontype/type';import { Cover } from '../cover/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type BreedprideCollection_Schema = {
  Id: string;
  CreatedOn: Date;
  CreatedBy: Contact;
  ModifiedOn: Date;
  ModifiedBy: Contact;
  Private: boolean;
  EntityName: string;
  Auto: boolean;
  Type: BreedprideCollectionType;
  AvatarUrl: string;
  Url: string;
  Name: string;
  Notes: string;
  UpdateDate: Date;
  Cover: Cover;
  Owner: Contact
};


export type  BreedprideCollection = Partial< BreedprideCollection_Schema>;

export function  BreedprideCollection<T extends Partial< BreedprideCollection>>(config: T): T;

export function  BreedprideCollection<T extends Partial< BreedprideCollection>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  BreedprideCollection<T extends Partial< BreedprideCollection> | Partial< BreedprideCollection>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
