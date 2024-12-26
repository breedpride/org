
import { PetType } from '../pettype/type';import { Account } from '../account/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type Title_Schema = {
  Id: string;
  Name: string;
  Description: string;
  PetType: PetType;
  Provider: Account;
  Rating: number
};


export type  Title = Partial< Title_Schema>;

export function  Title<T extends Partial< Title>>(config: T): T;

export function  Title<T extends Partial< Title>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  Title<T extends Partial< Title> | Partial< Title>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
