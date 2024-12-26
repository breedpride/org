
import { Contact } from '../contact/type';import { PostType } from '../posttype/type';import { PostState } from '../poststate/type';import { Event } from '../event/type';import { Cover } from '../cover/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type Post_Schema = {
  Id: string;
  CreatedOn: Date;
  CreatedBy: Contact;
  ModifiedOn: Date;
  ModifiedBy: Contact;
  PublicationDate: Date;
  Type: PostType;
  State: PostState;
  Text: string;
  Url: string;
  MasterPost: Post;
  IsMoment: boolean;
  Author: Contact;
  Name: string;
  Date: Date;
  Event: Event;
  Latitude: number;
  Longitude: number;
  Photos: string;
  Participants: string;
  Cover: Cover
};


export type  Post = Partial< Post_Schema>;

export function  Post<T extends Partial< Post>>(config: T): T;

export function  Post<T extends Partial< Post>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  Post<T extends Partial< Post> | Partial< Post>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
