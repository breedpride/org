
import { Contact } from '../contact/type';import { Country } from '../country/type';import { Region } from '../region/type';import { TimeZone } from '../timezone/type';import { GeoNamesTimeZone } from '../geonamestimezone/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type City_Schema = {
  Id: string;
  CreatedOn: Date;
  CreatedBy: Contact;
  ModifiedOn: Date;
  ModifiedBy: Contact;
  Name: string;
  Description: string;
  Country: Country;
  Region: Region;
  TimeZone: TimeZone;
  GeoNamesTimeZone: GeoNamesTimeZone;
  AlternateNames: string;
  GeoNamesId: string;
  Dem: number;
  Latitude: number;
  Longitude: number;
  Population: number
};


export type  City = Partial< City_Schema>;

export function  City<T extends Partial< City>>(config: T): T;

export function  City<T extends Partial< City>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  City<T extends Partial< City> | Partial< City>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
