
import { PetType } from '../pettype/type';import { Gender } from '../gender/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type Sex_Schema = {
  Id: string;
  Name: string;
  Description: string;
  PetType: PetType;
  Gender: Gender;
  Code: string
};


export type  Sex = Partial< Sex_Schema>;

export function  Sex<T extends Partial< Sex>>(config: T): T;

export function  Sex<T extends Partial< Sex>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  Sex<T extends Partial< Sex> | Partial< Sex>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
