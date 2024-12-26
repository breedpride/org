
import { Contact } from '../contact/type';import { CoverType } from '../covertype/type';import { Breed } from '../breed/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type Cover_Schema = {
  Id: string;
  CreatedOn: Date;
  CreatedBy: Contact;
  ModifiedOn: Date;
  ModifiedBy: Contact;
  Name: string;
  RedirectUrl: string;
  AvatarUrl: string;
  Type: CoverType;
  Owner: Contact;
  Url: string;
  Breed: Breed;
  IsDefault: boolean
};


export type  Cover = Partial< Cover_Schema>;

export function  Cover<T extends Partial< Cover>>(config: T): T;

export function  Cover<T extends Partial< Cover>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  Cover<T extends Partial< Cover> | Partial< Cover>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
