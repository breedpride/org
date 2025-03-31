import { WritableSignal } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Signal } from '@ngrx/signals/src/deep-signal';
import { FilterFnWithValue, IApiHelper } from './editing-event';


export interface BPFormGroupInterface extends FormGroup {
  clearFormGroup(): void;
  disableLookupWhenFilled(controlName: string): void;
  disableWhenNotFilledLookup(
    notFilledLookupName: string,
    disabledLookupName: string
  ): void;
  disableWithNull(controlNames: string[]): void;
  enableFields(controlNames: string[]): void;
  enableFilterByLookup(fn: FilterFnWithValue, fieldName: string): any;
  enableFilterWithValue(fn: FilterFnWithValue, value: any): any;
  enableWithNull(controlNames: string[]): void;
  filled: WritableSignal<boolean>;
  readonly filterReady: Signal<boolean>;
  getId(controlName: string): string | null;
  makeOptional(controlName: string[]): void;
  makeRequired(controlName: string[]): void;
  markRequiredEmptyAsTouched(): void;
  setNullValue(controlNames: string[]): void;
  simpleFilterById(IdFieldname: string, byAnyFieldName?: string): any;
  unsubscribe: any;
  getValues: () => any;
  fillFormByEntity: (entity: any, fieldsConfig: any, apiHelper: IApiHelper) => void;
}
