
import { Contact } from '../contact/type';import { PetServiceType } from '../petservicetype/type';import { Pet } from '../pet/type';import { Currency } from '../currency/type';import { PetServiceStatus } from '../petservicestatus/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type PetService_Schema = {
  Id: string;
  CreatedOn: Date;
  CreatedBy: Contact;
  ModifiedOn: Date;
  ModifiedBy: Contact;
  ServiceType: PetServiceType;
  Pet: Pet;
  Currency: Currency;
  Price: number;
  PetServiceStatus: PetServiceStatus;
  Date: Date
};


export type  PetService = Partial< PetService_Schema>;

export function  PetService<T extends Partial< PetService>>(config: T): T;

export function  PetService<T extends Partial< PetService>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  PetService<T extends Partial< PetService> | Partial< PetService>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
