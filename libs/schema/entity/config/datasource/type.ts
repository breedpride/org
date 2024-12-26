

import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type DataSource_Schema = {
  Id: string;
  Name: string;
  Description: string;
  Priority: number;
  Domain: string
};


export type  DataSource = Partial< DataSource_Schema>;

export function  DataSource<T extends Partial< DataSource>>(config: T): T;

export function  DataSource<T extends Partial< DataSource>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  DataSource<T extends Partial< DataSource> | Partial< DataSource>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
