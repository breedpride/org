
import { Contact } from '../contact/type';import { PetType } from '../pettype/type';import { SysLanguage } from '../syslanguage/type';import { BreedCategory } from '../breedcategory/type';import { Account } from '../account/type';import { Cover } from '../cover/type';import { PublicData } from '../publicdata/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type Breed_Schema = {
  Id: string;
  CreatedOn: Date;
  CreatedBy: Contact;
  ModifiedOn: Date;
  ModifiedBy: Contact;
  Name: string;
  PetType: PetType;
  DifferByCoatColor: boolean;
  DifferByCoatType: boolean;
  DifferBySize: boolean;
  Language: SysLanguage;
  AuthenticName: string;
  DifferByBodyFeature: boolean;
  PetProfileCount: number;
  Category: BreedCategory;
  KennelCount: number;
  HasRelatedBreed: boolean;
  AdminName: string;
  Url: string;
  Account: Account;
  PatronCount: number;
  AvatarUrl: string;
  Rating: number;
  AchievementProgress: number;
  Cover: Cover;
  PaymentRating: number;
  PublicData: PublicData
};


export type  Breed = Partial< Breed_Schema>;

export function  Breed<T extends Partial< Breed>>(config: T): T;

export function  Breed<T extends Partial< Breed>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  Breed<T extends Partial< Breed> | Partial< Breed>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
