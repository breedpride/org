
import { Contact } from '../contact/type';import { Country } from '../country/type';import { TimeZone } from '../timezone/type';import { GeoNamesTimeZone } from '../geonamestimezone/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type Region_Schema = {
  Id: string;
  CreatedOn: Date;
  CreatedBy: Contact;
  ModifiedOn: Date;
  ModifiedBy: Contact;
  Name: string;
  Description: string;
  Country: Country;
  TimeZone: TimeZone;
  GeoNamesTimeZone: GeoNamesTimeZone;
  AlternateNames: string;
  GeoNamesId: string;
  Dem: number;
  Latitude: number;
  Longitude: number;
  Code: string;
  RegionAdmin1Code: string
};


export type  Region = Partial< Region_Schema>;

export function  Region<T extends Partial< Region>>(config: T): T;

export function  Region<T extends Partial< Region>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  Region<T extends Partial< Region> | Partial< Region>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
