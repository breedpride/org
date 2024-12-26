
import { Title } from '../title/type';import { Pet } from '../pet/type';import { Country } from '../country/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type TitleInPet_Schema = {
  Id: string;
  Title: Title;
  Pet: Pet;
  IsConfirmed: boolean;
  Date: Date;
  Country: Country;
  Description: string;
  Amount: number;
  RawTitle: string
};


export type  TitleInPet = Partial< TitleInPet_Schema>;

export function  TitleInPet<T extends Partial< TitleInPet>>(config: T): T;

export function  TitleInPet<T extends Partial< TitleInPet>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  TitleInPet<T extends Partial< TitleInPet> | Partial< TitleInPet>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
