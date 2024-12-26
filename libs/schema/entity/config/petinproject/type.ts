
import { Contact } from '../contact/type';import { Project } from '../project/type';import { Pet } from '../pet/type';import { PetClass } from '../petclass/type';import { Place } from '../place/type';import { PetQualification } from '../petqualification/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type PetInProject_Schema = {
  Id: string;
  CreatedOn: Date;
  CreatedBy: Contact;
  ModifiedOn: Date;
  ModifiedBy: Contact;
  Project: Project;
  Pet: Pet;
  Number: number;
  Class: PetClass;
  WebLink: string;
  Result: string;
  Code: string;
  Handler: Contact;
  Judge: Contact;
  Place: Place;
  Qualification: PetQualification;
  Date: Date;
  TempProjectName: string
};


export type  PetInProject = Partial< PetInProject_Schema>;

export function  PetInProject<T extends Partial< PetInProject>>(config: T): T;

export function  PetInProject<T extends Partial< PetInProject>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  PetInProject<T extends Partial< PetInProject> | Partial< PetInProject>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
