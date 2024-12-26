
import { Contact } from '../contact/type';import { Pet } from '../pet/type';import { HealthExamObject } from '../healthexamobject/type';import { HealthExamResult } from '../healthexamresult/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type PetHealthExamResult_Schema = {
  Id: string;
  CreatedOn: Date;
  CreatedBy: Contact;
  ModifiedOn: Date;
  ModifiedBy: Contact;
  Pet: Pet;
  HealthExamObject: HealthExamObject;
  HealthExamResult: HealthExamResult;
  Date: Date
};


export type  PetHealthExamResult = Partial< PetHealthExamResult_Schema>;

export function  PetHealthExamResult<T extends Partial< PetHealthExamResult>>(config: T): T;

export function  PetHealthExamResult<T extends Partial< PetHealthExamResult>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  PetHealthExamResult<T extends Partial< PetHealthExamResult> | Partial< PetHealthExamResult>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
