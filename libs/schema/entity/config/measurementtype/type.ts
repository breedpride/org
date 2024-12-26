

import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type MeasurementType_Schema = {
  Id: string;
  Name: string;
  Description: string
};


export type  MeasurementType = Partial< MeasurementType_Schema>;

export function  MeasurementType<T extends Partial< MeasurementType>>(config: T): T;

export function  MeasurementType<T extends Partial< MeasurementType>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  MeasurementType<T extends Partial< MeasurementType> | Partial< MeasurementType>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
