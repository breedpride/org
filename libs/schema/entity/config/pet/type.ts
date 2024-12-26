
import { Contact } from '../contact/type';import { Account } from '../account/type';import { PetType } from '../pettype/type';import { Sex } from '../sex/type';import { Breed } from '../breed/type';import { PetStatus } from '../petstatus/type';import { CoatType } from '../coattype/type';import { CoatColor } from '../coatcolor/type';import { PetSize } from '../petsize/type';import { BodyFeature } from '../bodyfeature/type';import { Litter } from '../litter/type';import { Country } from '../country/type';import { BreedDivision } from '../breeddivision/type';import { VerificationStatus } from '../verificationstatus/type';import { Cover } from '../cover/type';import { PublicData } from '../publicdata/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type Pet_Schema = {
  Id: string;
  CreatedOn: Date;
  CreatedBy: Contact;
  ModifiedOn: Date;
  ModifiedBy: Contact;
  Name: string;
  Notes: string;
  DateOfBirth: Date;
  Owner: Contact;
  Kennel: Account;
  PetType: PetType;
  Sex: Sex;
  Father: Pet;
  Mother: Pet;
  Breed: Breed;
  Breeder: Contact;
  DateOfDeath: Date;
  PetStatus: PetStatus;
  CoatType: CoatType;
  CoatColor: CoatColor;
  Size: PetSize;
  BodyFeature: BodyFeature;
  Litter: Litter;
  CallName: string;
  CountryOfBirth: Country;
  Titles: string;
  InbreedingPercent: number;
  Url: string;
  OwnerKennel: Account;
  AvatarUrl: string;
  Rating: number;
  BreedDivision: BreedDivision;
  TrimTitles: string;
  CountryOfStay: Country;
  COI: number;
  VerificationStatus: VerificationStatus;
  RatingPlacementInBreed: number;
  IsPublic: boolean;
  Cover: Cover;
  PublicData: PublicData;
  Weight: number
};


export type  Pet = Partial< Pet_Schema>;

export function  Pet<T extends Partial< Pet>>(config: T): T;

export function  Pet<T extends Partial< Pet>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  Pet<T extends Partial< Pet> | Partial< Pet>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
