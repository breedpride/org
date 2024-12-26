
import { Contact } from '../contact/type';import { Currency } from '../currency/type';import { PetServiceType } from '../petservicetype/type';import { Litter } from '../litter/type';import { PetServiceStatus } from '../petservicestatus/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type PetServiceInLitter_Schema = {
  Id: string;
  CreatedOn: Date;
  CreatedBy: Contact;
  ModifiedOn: Date;
  ModifiedBy: Contact;
  Date: Date;
  Currency: Currency;
  Price: number;
  ServiceType: PetServiceType;
  Litter: Litter;
  PetServiceStatus: PetServiceStatus
};


export type  PetServiceInLitter = Partial< PetServiceInLitter_Schema>;

export function  PetServiceInLitter<T extends Partial< PetServiceInLitter>>(config: T): T;

export function  PetServiceInLitter<T extends Partial< PetServiceInLitter>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  PetServiceInLitter<T extends Partial< PetServiceInLitter> | Partial< PetServiceInLitter>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
