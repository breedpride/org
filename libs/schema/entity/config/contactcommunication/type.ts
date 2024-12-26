
import { CommunicationType } from '../communicationtype/type';import { Contact } from '../contact/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type ContactCommunication_Schema = {
  Id: string;
  CommunicationType: CommunicationType;
  Number: string;
  Contact: Contact;
  Position: number;
  SearchNumber: string;
  Primary: boolean;
  NonActual: boolean;
  DateSetNonActual: Date
};


export type  ContactCommunication = Partial< ContactCommunication_Schema>;

export function  ContactCommunication<T extends Partial< ContactCommunication>>(config: T): T;

export function  ContactCommunication<T extends Partial< ContactCommunication>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  ContactCommunication<T extends Partial< ContactCommunication> | Partial< ContactCommunication>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
