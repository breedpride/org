

import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type AffixType_Schema = {
  Id: string;
  Name: string;
  Description: string
};


export type  AffixType = Partial< AffixType_Schema>;

export function  AffixType<T extends Partial< AffixType>>(config: T): T;

export function  AffixType<T extends Partial< AffixType>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  AffixType<T extends Partial< AffixType> | Partial< AffixType>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
