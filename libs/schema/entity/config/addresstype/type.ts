

import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type AddressType_Schema = {
  Id: string;
  Name: string;
  Description: string;
  ForContact: boolean;
  ForAccount: boolean;
  Color: string
};


export type  AddressType = Partial< AddressType_Schema>;

export function  AddressType<T extends Partial< AddressType>>(config: T): T;

export function  AddressType<T extends Partial< AddressType>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  AddressType<T extends Partial< AddressType> | Partial< AddressType>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
