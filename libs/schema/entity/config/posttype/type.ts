
import { Contact } from '../contact/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type PostType_Schema = {
  Id: string;
  CreatedOn: Date;
  CreatedBy: Contact;
  ModifiedOn: Date;
  ModifiedBy: Contact;
  Name: string;
  Description: string;
  TemplateText: string
};


export type  PostType = Partial< PostType_Schema>;

export function  PostType<T extends Partial< PostType>>(config: T): T;

export function  PostType<T extends Partial< PostType>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  PostType<T extends Partial< PostType> | Partial< PostType>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
