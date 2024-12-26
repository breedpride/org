

import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type FirebaseAuthProvider_Schema = {
  Id: string;
  Name: string;
  Description: string
};


export type  FirebaseAuthProvider = Partial< FirebaseAuthProvider_Schema>;

export function  FirebaseAuthProvider<T extends Partial< FirebaseAuthProvider>>(config: T): T;

export function  FirebaseAuthProvider<T extends Partial< FirebaseAuthProvider>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  FirebaseAuthProvider<T extends Partial< FirebaseAuthProvider> | Partial< FirebaseAuthProvider>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
