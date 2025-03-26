import { Signal } from '@angular/core';
import { ValidatorFn } from '@angular/forms';
import { FormFieldCode } from '@bh/windmill';
import { FilterFieldConfig} from './filter-store-state';
import { FilterFn, InitFn, OnChangeFn } from './editing';


export type FieldState<T> = FilterFieldConfig & {
  entity: T | null;
  customColumnNgClass: string;
  customColumnClass: string;
};
export type StaticFieldConfig<T> = FieldState<T> & {
  filterFn?: FilterFn<T>;
  initFn?: InitFn<T>;
  onChange?: OnChangeFn<T>;
};

export type NullableField<T> = StaticFieldConfig<T> | null;

export type SignalFieldConfig = Signal<NullableField<any>>;
// Універсальний тип для стору
export type StoreType<T> = {
  id: Signal<string>;
  columnNgClass: Signal<string>;
  columnClass: Signal<string>;
  // fieldName: Signal<string>;
  // entity: Signal<T>;
  // value: T;
  // parsedValue?: T;
  entitySchemaName: Signal<string>;
  stringifiedValue?: string;
  isRequired: Signal<boolean>;
  readonly: Signal<boolean>;
  component: Signal<FormFieldCode>;
  validators: Signal<ValidatorFn[]>;
  placeholder: Signal<string>;

  columns: Signal<string[]>;
  filterFn?: FilterFn<T>;
  // parse?: (value: any) => T;
  // stringify?: (value: T) => string;
};

// TODO - with defaultValue/withDefaultNotLoaded/withDefaultEmpty
//TODO - збагачення данних через стори існуючі. boolean neзбагатиш при парсінгу
