
import { HealthExamObject } from '../healthexamobject/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type HealthExamResult_Schema = {
  Id: string;
  Name: string;
  Description: string;
  Object: HealthExamObject
};


export type  HealthExamResult = Partial< HealthExamResult_Schema>;

export function  HealthExamResult<T extends Partial< HealthExamResult>>(config: T): T;

export function  HealthExamResult<T extends Partial< HealthExamResult>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  HealthExamResult<T extends Partial< HealthExamResult> | Partial< HealthExamResult>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
