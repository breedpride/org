
import { Contact } from '../contact/type';import { EventType } from '../eventtype/type';import { EventStatus } from '../eventstatus/type';import { Territory } from '../territory/type';import { AccountIndustry } from '../accountindustry/type';import { Account } from '../account/type';import { City } from '../city/type';import { Region } from '../region/type';import { Country } from '../country/type';import { PetType } from '../pettype/type';import { Cover } from '../cover/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type Event_Schema = {
  Id: string;
  CreatedOn: Date;
  CreatedBy: Contact;
  ModifiedOn: Date;
  ModifiedBy: Contact;
  Name: string;
  Type: EventType;
  Owner: Contact;
  Status: EventStatus;
  StartDate: Date;
  EndDate: Date;
  Territory: Territory;
  Industry: AccountIndustry;
  LastActualizeDate: Date;
  RecipientCount: number;
  Organizer: Account;
  Address: string;
  City: City;
  Region: Region;
  Country: Country;
  Account: Account;
  Url: string;
  PetType: PetType;
  Cover: Cover
};


export type  Event = Partial< Event_Schema>;

export function  Event<T extends Partial< Event>>(config: T): T;

export function  Event<T extends Partial< Event>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  Event<T extends Partial< Event> | Partial< Event>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
