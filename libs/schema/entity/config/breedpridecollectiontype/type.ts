
import { Contact } from '../contact/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type BreedprideCollectionType_Schema = {
  Id: string;
  CreatedOn: Date;
  CreatedBy: Contact;
  ModifiedOn: Date;
  ModifiedBy: Contact;
  Name: string;
  Description: string
};


export type  BreedprideCollectionType = Partial< BreedprideCollectionType_Schema>;

export function  BreedprideCollectionType<T extends Partial< BreedprideCollectionType>>(config: T): T;

export function  BreedprideCollectionType<T extends Partial< BreedprideCollectionType>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  BreedprideCollectionType<T extends Partial< BreedprideCollectionType> | Partial< BreedprideCollectionType>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
