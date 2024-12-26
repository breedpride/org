

import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type VerificationStatus_Schema = {
  Id: string;
  Name: string;
  Description: string
};


export type  VerificationStatus = Partial< VerificationStatus_Schema>;

export function  VerificationStatus<T extends Partial< VerificationStatus>>(config: T): T;

export function  VerificationStatus<T extends Partial< VerificationStatus>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  VerificationStatus<T extends Partial< VerificationStatus> | Partial< VerificationStatus>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
