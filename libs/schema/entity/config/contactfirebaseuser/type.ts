
import { Contact } from '../contact/type';import { FirebaseAuthProvider } from '../firebaseauthprovider/type';import { Referral } from '../referral/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type ContactFirebaseUser_Schema = {
  Id: string;
  FirebaseUId: string;
  Contact: Contact;
  FirebaseAuthProvider: FirebaseAuthProvider;
  Email: string;
  Referral: Referral
};


export type  ContactFirebaseUser = Partial< ContactFirebaseUser_Schema>;

export function  ContactFirebaseUser<T extends Partial< ContactFirebaseUser>>(config: T): T;

export function  ContactFirebaseUser<T extends Partial< ContactFirebaseUser>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  ContactFirebaseUser<T extends Partial< ContactFirebaseUser> | Partial< ContactFirebaseUser>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
