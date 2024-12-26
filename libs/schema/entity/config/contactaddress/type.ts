
import { Contact } from '../contact/type';import { AddressType } from '../addresstype/type';import { Country } from '../country/type';import { Region } from '../region/type';import { City } from '../city/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type ContactAddress_Schema = {
  Id: string;
  CreatedOn: Date;
  CreatedBy: Contact;
  ModifiedOn: Date;
  ModifiedBy: Contact;
  AddressType: AddressType;
  Country: Country;
  Region: Region;
  City: City;
  Address: string;
  Zip: string;
  Primary: boolean;
  Contact: Contact;
  FullAddress: string
};


export type  ContactAddress = Partial< ContactAddress_Schema>;

export function  ContactAddress<T extends Partial< ContactAddress>>(config: T): T;

export function  ContactAddress<T extends Partial< ContactAddress>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  ContactAddress<T extends Partial< ContactAddress> | Partial< ContactAddress>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
