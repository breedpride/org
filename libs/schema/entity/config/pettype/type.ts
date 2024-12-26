
import { PublicData } from '../publicdata/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type PetType_Schema = {
  Id: string;
  Name: string;
  Description: string;
  PetProfileCount: number;
  Url: string;
  OrganizationCount: number;
  ProfileCount: number;
  PatronCount: number;
  KennelCount: number;
  AvatarUrl: string;
  EventCount: number;
  PublicData: PublicData
};


export type  PetType = Partial< PetType_Schema>;

export function  PetType<T extends Partial< PetType>>(config: T): T;

export function  PetType<T extends Partial< PetType>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  PetType<T extends Partial< PetType> | Partial< PetType>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
