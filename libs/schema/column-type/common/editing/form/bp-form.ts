import { signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { byAny } from '../../filtering/api-filters';
import { NullableFilterGroup } from '../../filtering/filter-group';
import { Subject, filter, pairwise, startWith, takeUntil } from 'rxjs';
import { BPFormGroupInterface, FilterFnWithValue, IApiHelper } from '../events';
import { FilterFieldConfig } from '../../filter-store-state';
import { WithCreatioId } from '../../identifying/with-id';
export const idFrom = (value: WithCreatioId) => {
  return value && value.Id ? value.Id : null;
};
export const createFirstRunDetector = () => {
  let isFirstRun = true;

  return (): boolean => {
    if (isFirstRun) {
      isFirstRun = false;
      return true;
    } else {
      return false;
    }
  };
};
export class BPFormGroup extends FormGroup implements BPFormGroupInterface {
  // TODO - filterFields income from StoreConfig
  // TODO - FormFields income from StoreConfig
  constructor(args: any) {
    super(args);
  }

  subscribe = new Subject<boolean>();
  unsubscribe = this.subscribe.asObservable().pipe(filter((e) => e));

  public readonly filterReady = signal(false);
  public filled = signal(false);
  // TODO - use within form.value
  getValues(): any {
    const values: Record<string, any> = {};
    Object.entries(this.controls).forEach(([key, value]) => {
      values[key] = value['value'];
    });
    return values;
  }
  getId(controlName: string): string | null {
    return idFrom(this.get(controlName)?.value);
  }
  enableFilterWithValue(
    fn: FilterFnWithValue,
    value: any
  ): NullableFilterGroup {
    return value ? fn(value) : null;
  }

  enableFilterByLookup(
    fn: FilterFnWithValue,
    fieldName: string
  ): NullableFilterGroup {
    const value = this.getId(fieldName);
    return value ? fn(value) : null;
  }
  simpleFilterById(
    IdFieldname: string,
    byAnyFieldName?: string
  ): NullableFilterGroup {
    const id = idFrom(this.get(IdFieldname)?.value);
    return id ? byAny(byAnyFieldName || IdFieldname, id) : null;
  }

  disableLookupWhenFilled(controlName: string): void {
    if (idFrom(this.get(controlName)?.value)) {
      this.get(controlName)?.disable();
    }
  }
  makeRequired(controlNames: string[]): void {
    controlNames.forEach((fieldName) => {
      this.get(fieldName)?.addValidators(Validators.required);
    });
  }
  makeOptional(controlNames: string[]): void {
    controlNames.forEach((fieldName) => {
      this.get(fieldName)?.removeValidators(Validators.required);
    });
  }
  //TODO arrayFields
  disableWhenNotFilledLookup(
    notFilledLookupName: string,
    disabledLookupName: string
  ): void {
    const id = idFrom(this.get(notFilledLookupName)?.value);
    if (!id) {
      this.get(disabledLookupName)?.disable();
    }
  }

  enableFields(controlNames: string[]): void {
    controlNames.forEach((fieldName) => {
      this.get(fieldName)?.enable();
    });
  }

  enableWithNull(controlNames: string[]): void {
    controlNames.forEach((fieldName) => {
      this.get(fieldName)?.setValue(null);
      this.get(fieldName)?.enable();
    });
  }

  disableWithNull(controlNames: string[]): void {
    controlNames.forEach((fieldName) => {
      this.get(fieldName)?.setValue(null);
      this.get(fieldName)?.disable();
    });
  }
  setNullValue(controlNames: string[]): void {
    controlNames.forEach((fieldName) => {
      this.get(fieldName)?.setValue(null);
    });
  }
  // TODO - rework use entity for params (parsed values )
  // or pair param Value
  async clearFormGroup(): Promise<void> {
    this.subscribe.next(true);
    Object.keys(this.controls).forEach((controlName) => {
      this.removeControl(controlName, {
        emitEvent: false,
      });
    });
    this.subscribe.next(false);
  }

  markRequiredEmptyAsTouched(): void {
    Object.keys(this.controls).forEach((controlName) => {
      if (!this.get(controlName)?.valid) {
        this.get(controlName)?.markAsDirty();
        this.get(controlName)?.markAsTouched();
      }
    });
  }

  //TODO make async f
  fillFormByEntity(
    entity: any,
    fieldsConfig: Record<string, FilterFieldConfig> | undefined | null,
    helper: IApiHelper
  ): void {
    console.log('!!!!!!!Entity', entity);
    console.log('!!!!!!!FieldsConfig', fieldsConfig);
    this.filled.set(false);
    this.clearFormGroup();
    if (entity && fieldsConfig) {
      // Set entity values
      for (const [key, value] of Object.entries(fieldsConfig)) {
        const entityValue = entity[key];
        this.addControl(key, new FormControl(entityValue, value.validators));
      }

      // run init (after every field subscription)
      Object.entries(fieldsConfig).forEach(([, value]) => {
        if (value.initBeforeChangeFn) {
          // TODO - await????
          value.initBeforeChangeFn(this, { helper });
        }
      });
      // create OnChangeSubscription
      Object.entries(fieldsConfig).forEach(([key, value]) => {
        this.onChangeSubscribe(value, key, entity[key], helper);
      });

      // run init (after every field subscription)
      Object.entries(fieldsConfig).forEach(([, value]) => {
        if (value.initFn) {
          value.initFn(this, { helper });
        }
      });
    }
    this.filled.set(true);
  }

  onChangeSubscribe(
    field: FilterFieldConfig,
    key: string,
    entityValue: any,
    helper: IApiHelper
  ): void {
    if (field !== undefined && field !== null && field.onChange) {
      const firstRunDetector = createFirstRunDetector();
      const control = this.get(key);
      if (control !== undefined && control !== null) {
        this.get(key)
          ?.valueChanges.pipe(
            takeUntil(this.unsubscribe),
            startWith(entityValue),
            // all valid values or invalid value when it is started
            // skip(),
            // filter(((val:any, index) => index < 1 || control.valid),
            filter(() => firstRunDetector() || control.valid),
            pairwise(),
            filter(([prev, next]) => prev !== next)
          )
          .subscribe(([prev, next]: [any, any]) => {
            if (field.onChange) {
              field.onChange({ value: next, form: this, helper, prev });
            }
          });
      }
    }
  }
}
