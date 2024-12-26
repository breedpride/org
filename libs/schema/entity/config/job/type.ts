

import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type Job_Schema = {
  Id: string;
  Name: string;
  Description: string
};


export type  Job = Partial< Job_Schema>;

export function  Job<T extends Partial< Job>>(config: T): T;

export function  Job<T extends Partial< Job>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  Job<T extends Partial< Job> | Partial< Job>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
