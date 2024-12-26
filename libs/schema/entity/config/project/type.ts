
import { Contact } from '../contact/type';import { Account } from '../account/type';import { ProjectType } from '../projecttype/type';import { ProjectStatus } from '../projectstatus/type';import { Event } from '../event/type';import { ProjectCategory } from '../projectcategory/type';import { Breed } from '../breed/type';import { PetType } from '../pettype/type';import { Cover } from '../cover/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type Project_Schema = {
  Id: string;
  CreatedOn: Date;
  CreatedBy: Contact;
  ModifiedOn: Date;
  ModifiedBy: Contact;
  Notes: string;
  Name: string;
  Account: Account;
  Type: ProjectType;
  Owner: Contact;
  Status: ProjectStatus;
  StartDate: Date;
  EndDate: Date;
  Duration: number;
  Deadline: Date;
  ParentProject: Project;
  ActualCompletion: number;
  Position: number;
  Event: Event;
  Category: ProjectCategory;
  Breed: Breed;
  Url: string;
  PetType: PetType;
  Cover: Cover
};


export type  Project = Partial< Project_Schema>;

export function  Project<T extends Partial< Project>>(config: T): T;

export function  Project<T extends Partial< Project>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  Project<T extends Partial< Project> | Partial< Project>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
