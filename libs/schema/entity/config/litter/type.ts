
import { Contact } from '../contact/type';import { Pet } from '../pet/type';import { PetType } from '../pettype/type';import { Period } from '../period/type';import { LitterStatus } from '../litterstatus/type';import { Account } from '../account/type';import { Letter } from '../letter/type';import { Cover } from '../cover/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type Litter_Schema = {
  Id: string;
  CreatedOn: Date;
  CreatedBy: Contact;
  ModifiedOn: Date;
  ModifiedBy: Contact;
  Name: string;
  Notes: string;
  Father: Pet;
  Mother: Pet;
  PetType: PetType;
  MatingPeriod: Period;
  DateOfBirth: Date;
  Status: LitterStatus;
  Kennel: Account;
  Breeder: Contact;
  Url: string;
  Letter: Letter;
  MaleAmount: number;
  FemaleAmount: number;
  IsPublic: boolean;
  Cover: Cover;
  StartDate: Date;
  EndDate: Date
};


export type  Litter = Partial< Litter_Schema>;

export function  Litter<T extends Partial< Litter>>(config: T): T;

export function  Litter<T extends Partial< Litter>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  Litter<T extends Partial< Litter> | Partial< Litter>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
