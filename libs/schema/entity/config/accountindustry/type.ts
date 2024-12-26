
import { PetType } from '../pettype/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type AccountIndustry_Schema = {
  Id: string;
  Name: string;
  Description: string;
  PetType: PetType
};


export type  AccountIndustry = Partial< AccountIndustry_Schema>;

export function  AccountIndustry<T extends Partial< AccountIndustry>>(config: T): T;

export function  AccountIndustry<T extends Partial< AccountIndustry>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  AccountIndustry<T extends Partial< AccountIndustry> | Partial< AccountIndustry>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
