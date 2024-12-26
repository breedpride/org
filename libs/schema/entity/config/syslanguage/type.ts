

import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type SysLanguage_Schema = {
  Id: string;
  Name: string;
  Description: string;
  Code: string;
  IsUsed: boolean;
  SysCultureDefId: string
};


export type  SysLanguage = Partial< SysLanguage_Schema>;

export function  SysLanguage<T extends Partial< SysLanguage>>(config: T): T;

export function  SysLanguage<T extends Partial< SysLanguage>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  SysLanguage<T extends Partial< SysLanguage> | Partial< SysLanguage>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
