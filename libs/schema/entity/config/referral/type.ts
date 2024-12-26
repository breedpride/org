
import { Contact } from '../contact/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type Referral_Schema = {
  Id: string;
  Code: string;
  Contact: Contact
};


export type  Referral = Partial< Referral_Schema>;

export function  Referral<T extends Partial< Referral>>(config: T): T;

export function  Referral<T extends Partial< Referral>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  Referral<T extends Partial< Referral> | Partial< Referral>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
