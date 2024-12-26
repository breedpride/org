import { Injector } from '@angular/core';
import { idString } from '../../identifying/with-id';
import { NullableFilterGroup } from '../../filtering';
import { BPFormGroupInterface } from './form-group-interface';

export type WithEditingEvents<T> = {
  initBeforeChangeFn: InitFn<T>;
  initFn: InitFn<T>;
  onChange: OnChangeFn<T>;
};


export interface IApiHelper {
  getBreedPetType(breedId: idString): any;
  getOwnerKennels(id: idString): any;
  getPetBreed(id: idString): any;
}

export type FieldFnAdditional<T> = {
  form?: BPFormGroupInterface | null;
  helper?: IApiHelper;
  prev?: T;
};

export type InitFn<T> = (
  form: BPFormGroupInterface,
  additional?: FieldFnAdditional<T>
) => void;

export type FilterFnWithValue = (value: any) => NullableFilterGroup;

export type FieldOptions<T> = {
  injector?: Injector;
} & FieldFnAdditional<T>;

export type FilterFnParam<T> = FieldOptions<T>;

export type FilterFn<T> = (
  additional: FilterFnParam<T>
) => NullableFilterGroup | Promise<NullableFilterGroup>;

export type OnChangeFn<T> = (params: { value: T } & FilterFnParam<T>) => void;
// TODO -rename
// TODO - use entities and entity - settings
