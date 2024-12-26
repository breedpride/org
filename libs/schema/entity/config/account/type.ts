
import { Contact } from '../contact/type';import { AccountOwnership } from '../accountownership/type';import { AccountIndustry } from '../accountindustry/type';import { AccountType } from '../accounttype/type';import { AddressType } from '../addresstype/type';import { City } from '../city/type';import { Region } from '../region/type';import { Country } from '../country/type';import { AccountCategory } from '../accountcategory/type';import { AccountStatus } from '../accountstatus/type';import { AffixType } from '../affixtype/type';import { VerificationStatus } from '../verificationstatus/type';import { Cover } from '../cover/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type Account_Schema = {
  Id: string;
  Name: string;
  Owner: Contact;
  CreatedOn: Date;
  CreatedBy: Contact;
  ModifiedOn: Date;
  ModifiedBy: Contact;
  Ownership: AccountOwnership;
  PrimaryContact: Contact;
  Parent: Account;
  Industry: AccountIndustry;
  Code: string;
  Type: AccountType;
  Phone: string;
  AdditionalPhone: string;
  Web: string;
  AddressType: AddressType;
  Address: string;
  City: City;
  Region: Region;
  Zip: string;
  Country: Country;
  AccountCategory: AccountCategory;
  Notes: string;
  AlternativeName: string;
  GPSN: string;
  GPSE: string;
  Status: AccountStatus;
  AffixType: AffixType;
  Federation: Account;
  AboutUs: string;
  Url: string;
  AvatarUrl: string;
  HasKennelName: boolean;
  Rating: number;
  Since: Date;
  Verified: boolean;
  VerificationStatus: VerificationStatus;
  CompanyFoundationDate: Date;
  RatingPlacementInBreed: number;
  Cover: Cover
};


export type  Account = Partial< Account_Schema>;

export function  Account<T extends Partial< Account>>(config: T): T;

export function  Account<T extends Partial< Account>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  Account<T extends Partial< Account> | Partial< Account>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
