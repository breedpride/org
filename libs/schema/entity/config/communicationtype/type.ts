

import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type CommunicationType_Schema = {
  Id: string;
  Name: string;
  Description: string;
  UseforAccounts: boolean;
  UseforContacts: boolean;
  DisplayFormat: string
};


export type  CommunicationType = Partial< CommunicationType_Schema>;

export function  CommunicationType<T extends Partial< CommunicationType>>(config: T): T;

export function  CommunicationType<T extends Partial< CommunicationType>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  CommunicationType<T extends Partial< CommunicationType> | Partial< CommunicationType>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
