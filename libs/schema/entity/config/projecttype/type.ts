

import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type ProjectType_Schema = {
  Id: string;
  Name: string;
  Description: string
};


export type  ProjectType = Partial< ProjectType_Schema>;

export function  ProjectType<T extends Partial< ProjectType>>(config: T): T;

export function  ProjectType<T extends Partial< ProjectType>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  ProjectType<T extends Partial< ProjectType> | Partial< ProjectType>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
