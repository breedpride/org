
import { Contact } from '../contact/type';import { TimeZone } from '../timezone/type';import { GeoNamesTimeZone } from '../geonamestimezone/type';import { PublicData } from '../publicdata/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type Country_Schema = {
  Id: string;
  CreatedOn: Date;
  CreatedBy: Contact;
  ModifiedOn: Date;
  ModifiedBy: Contact;
  Name: string;
  Description: string;
  BillingInfo: string;
  TimeZone: TimeZone;
  Code: string;
  AlternateNames: string;
  GeoNamesTimeZone: GeoNamesTimeZone;
  GeoNamesCountryCode: string;
  GeoNamesId: string;
  Dem: number;
  Latitude: number;
  Longitude: number;
  Alpha2Code: string;
  PublicData: PublicData;
  Url: string
};


export type  Country = Partial< Country_Schema>;

export function  Country<T extends Partial< Country>>(config: T): T;

export function  Country<T extends Partial< Country>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  Country<T extends Partial< Country> | Partial< Country>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
