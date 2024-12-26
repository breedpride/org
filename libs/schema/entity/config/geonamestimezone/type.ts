

import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type GeoNamesTimeZone_Schema = {
  Id: string;
  Name: string;
  Description: string;
  GMTOffset: number;
  CountryCode: string
};


export type  GeoNamesTimeZone = Partial< GeoNamesTimeZone_Schema>;

export function  GeoNamesTimeZone<T extends Partial< GeoNamesTimeZone>>(config: T): T;

export function  GeoNamesTimeZone<T extends Partial< GeoNamesTimeZone>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  GeoNamesTimeZone<T extends Partial< GeoNamesTimeZone> | Partial< GeoNamesTimeZone>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
