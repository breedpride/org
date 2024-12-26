

import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type ProjectStatus_Schema = {
  Id: string;
  Name: string;
  Description: string;
  IsFinal: boolean
};


export type  ProjectStatus = Partial< ProjectStatus_Schema>;

export function  ProjectStatus<T extends Partial< ProjectStatus>>(config: T): T;

export function  ProjectStatus<T extends Partial< ProjectStatus>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  ProjectStatus<T extends Partial< ProjectStatus> | Partial< ProjectStatus>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
