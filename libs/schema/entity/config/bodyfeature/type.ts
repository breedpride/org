

import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type BodyFeature_Schema = {
  Id: string;
  Name: string;
  Description: string
};


export type  BodyFeature = Partial< BodyFeature_Schema>;

export function  BodyFeature<T extends Partial< BodyFeature>>(config: T): T;

export function  BodyFeature<T extends Partial< BodyFeature>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  BodyFeature<T extends Partial< BodyFeature> | Partial< BodyFeature>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
