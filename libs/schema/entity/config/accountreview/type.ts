
import { Contact } from '../contact/type';import { Account } from '../account/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type AccountReview_Schema = {
  Id: string;
  CreatedOn: Date;
  CreatedBy: Contact;
  ModifiedOn: Date;
  ModifiedBy: Contact;
  Contact: Contact;
  Rating: number;
  OrderNumber: number;
  Review: string;
  Account: Account;
  test: string
};


export type  AccountReview = Partial< AccountReview_Schema>;

export function  AccountReview<T extends Partial< AccountReview>>(config: T): T;

export function  AccountReview<T extends Partial< AccountReview>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  AccountReview<T extends Partial< AccountReview> | Partial< AccountReview>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
