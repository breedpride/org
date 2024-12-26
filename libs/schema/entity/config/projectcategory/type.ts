
import { EventType } from '../eventtype/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type ProjectCategory_Schema = {
  Id: string;
  Name: string;
  Description: string;
  EventType: EventType
};


export type  ProjectCategory = Partial< ProjectCategory_Schema>;

export function  ProjectCategory<T extends Partial< ProjectCategory>>(config: T): T;

export function  ProjectCategory<T extends Partial< ProjectCategory>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  ProjectCategory<T extends Partial< ProjectCategory> | Partial< ProjectCategory>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
