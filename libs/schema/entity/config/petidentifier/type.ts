
import { Contact } from '../contact/type';import { PetIdentifierType } from '../petidentifiertype/type';import { Pet } from '../pet/type';import { Studbook } from '../studbook/type';import { DataSource } from '../datasource/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type PetIdentifier_Schema = {
  Id: string;
  CreatedOn: Date;
  CreatedBy: Contact;
  ModifiedOn: Date;
  ModifiedBy: Contact;
  Value: string;
  PetIdentifierType: PetIdentifierType;
  Pet: Pet;
  Date: Date;
  Studbook: Studbook;
  Number: string;
  DataSource: DataSource;
  IsProcessed: boolean;
  TrimValue: string;
  IsPublic: boolean
};


export type  PetIdentifier = Partial< PetIdentifier_Schema>;

export function  PetIdentifier<T extends Partial< PetIdentifier>>(config: T): T;

export function  PetIdentifier<T extends Partial< PetIdentifier>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  PetIdentifier<T extends Partial< PetIdentifier> | Partial< PetIdentifier>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
