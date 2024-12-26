
import { Contact } from '../contact/type';import { Account } from '../account/type';import { Pet } from '../pet/type';import { Breed } from '../breed/type';import { Event } from '../event/type';import { Project } from '../project/type';import { PetType } from '../pettype/type';import { Country } from '../country/type';import { TitleInPet } from '../titleinpet/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type PublicData_Schema = {
  Id: string;
  CreatedOn: Date;
  CreatedBy: Contact;
  ModifiedOn: Date;
  ModifiedBy: Contact;
  Name: string;
  HashMD5: string;
  Account: Account;
  Contact: Contact;
  Pet: Pet;
  Breed: Breed;
  Event: Event;
  Project: Project;
  RecordId: string;
  Model: string;
  EntityName: string;
  Primary: boolean;
  Redirect: PublicData;
  PetType: PetType;
  Country: Country;
  PetTitles: TitleInPet;
  HasOwner: boolean
};


export type  PublicData = Partial< PublicData_Schema>;

export function  PublicData<T extends Partial< PublicData>>(config: T): T;

export function  PublicData<T extends Partial< PublicData>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  PublicData<T extends Partial< PublicData> | Partial< PublicData>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
