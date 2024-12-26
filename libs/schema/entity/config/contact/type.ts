
import { ContactSalutationType } from '../contactsalutationtype/type';import { Gender } from '../gender/type';import { Account } from '../account/type';import { ContactDecisionRole } from '../contactdecisionrole/type';import { Job } from '../job/type';import { AddressType } from '../addresstype/type';import { City } from '../city/type';import { Region } from '../region/type';import { Country } from '../country/type';import { SysLanguage } from '../syslanguage/type';import { VerificationStatus } from '../verificationstatus/type';import { Cover } from '../cover/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type Contact_Schema = {
  Id: string;
  Name: string;
  CreatedOn: Date;
  CreatedBy: Contact;
  ModifiedOn: Date;
  ModifiedBy: Contact;
  SalutationType: ContactSalutationType;
  Gender: Gender;
  Account: Account;
  DecisionRole: ContactDecisionRole;
  Job: Job;
  JobTitle: string;
  BirthDate: Date;
  Phone: string;
  MobilePhone: string;
  HomePhone: string;
  Skype: string;
  Email: string;
  AddressType: AddressType;
  Address: string;
  City: City;
  Region: Region;
  Zip: string;
  Country: Country;
  Notes: string;
  Facebook: string;
  LinkedIn: string;
  Twitter: string;
  FacebookId: string;
  LinkedInId: string;
  TwitterId: string;
  Surname: string;
  GivenName: string;
  MiddleName: string;
  Confirmed: boolean;
  IsNonActualEmail: boolean;
  Language: SysLanguage;
  Age: number;
  AlternateNames: string;
  IsEmailConfirmed: boolean;
  Url: string;
  AvatarUrl: string;
  VerificationStatus: VerificationStatus;
  Cover: Cover;
  Rating: number
};


export type  Contact = Partial< Contact_Schema>;

export function  Contact<T extends Partial< Contact>>(config: T): T;

export function  Contact<T extends Partial< Contact>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  Contact<T extends Partial< Contact> | Partial< Contact>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
