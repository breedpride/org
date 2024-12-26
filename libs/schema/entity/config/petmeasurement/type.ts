
import { Pet } from '../pet/type';import { MeasurementType } from '../measurementtype/type';import { Unit } from '../unit/type';
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type PetMeasurement_Schema = {
  Id: string;
  Value: number;
  Day: number;
  Date: Date;
  Pet: Pet;
  MeasurementType: MeasurementType;
  Unit: Unit;
  ActiveSynchronization: boolean
};


export type  PetMeasurement = Partial< PetMeasurement_Schema>;

export function  PetMeasurement<T extends Partial< PetMeasurement>>(config: T): T;

export function  PetMeasurement<T extends Partial< PetMeasurement>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  PetMeasurement<T extends Partial< PetMeasurement> | Partial< PetMeasurement>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
