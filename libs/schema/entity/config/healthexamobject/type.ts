

import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type HealthExamObject_Schema = {
  Id: string;
  Name: string;
  Description: string;
  Code: string
};


export type  HealthExamObject = Partial< HealthExamObject_Schema>;

export function  HealthExamObject<T extends Partial< HealthExamObject>>(config: T): T;

export function  HealthExamObject<T extends Partial< HealthExamObject>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  HealthExamObject<T extends Partial< HealthExamObject> | Partial< HealthExamObject>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
