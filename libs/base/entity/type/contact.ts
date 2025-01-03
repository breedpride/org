
import { ContactSalutationType } from './contactsalutationtype';
import { Gender } from './gender';
import { Account } from './account';
import { ContactDecisionRole } from './contactdecisionrole';
import { Job } from './job';
import { AddressType } from './addresstype';
import { City } from './city';
import { Region } from './region';
import { Country } from './country';
import { SysLanguage } from './syslanguage';
import { VerificationStatus } from './verificationstatus';
import { Cover } from './cover';

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

  // TODO - передаем модель яка нам потрібна. Можливо як дженерік. Можливо як кервайред
  return { ...config };
  // return getPartialFromConfig(config);
}
