import { Validators } from '@angular/forms';
import { FormFieldCode } from '@bh/windmill';
import { EmptyFieldConfig } from '@bh/superfield';
import { BPFormGroupInterface, FilterFieldConfig, idString } from '@bh/superfield';
import { merge } from 'lodash-es';
import { byAny, ME } from '@bh/filter';
import { lookupFilterField, MAIN_FILTER_NAME } from './filter-fields';

export const nameFrom = (value: { Name: string }) => {
  return value && value.Name ? value.Name : null;
};

export const displayValue = (
  map: BPFormGroupInterface | null | undefined,
  name: string
): string | null => (map?.get(name) ? nameFrom(map.get(name)?.value) : '');

export const MAIN_FILTER_FIELD: FilterFieldConfig = merge(
  {},
  EmptyFieldConfig,
  {
    active: (form) => form.get(MAIN_FILTER_NAME)?.value,
    displayValue: (options) => {
      const filter: FilterFieldConfig | null =
        options.form?.get(MAIN_FILTER_NAME)?.value ?? null;
      return filter && filter.displayValue ? filter.displayValue(options) : '';
    },
    entitiesColumns: [],
    getFilter: (options) =>
      options?.form?.get(MAIN_FILTER_NAME)?.value?.getFilter(options) ?? null,
    id: MAIN_FILTER_NAME,
    placeholder: 'Main filter *',
    component: FormFieldCode.HeaderFilterManager,
    isRequired: true,
  } as Partial<FilterFieldConfig>
);

export const simpleMainFilterFieldPart = (id: idString, name: string) =>
  merge({}, EmptyFieldConfig, {
    active: (form: BPFormGroupInterface | null | undefined) =>
      form?.get(MAIN_FILTER_NAME)?.value.id === id,
    displayValue: () => name,
    entitiesColumns: [],
    id,
    placeholder: name,
    component: FormFieldCode.HeaderFilterManager,
  });

export const simpleFilter = (nameId: string): Partial<FilterFieldConfig> =>
  merge({}, EmptyFieldConfig, {
    active: () => true,
    id: nameId,
  });

export const simpleFilterLookupField = (name: string) =>
  merge({}, lookupFilterField, {
    active: (form) => !!form.getId(name),
    displayValue: (options) => displayValue(options.form, name) || '',
    entitySchemaName: name,
    getFilter: (options) => options.form?.simpleFilterById(name),
    id: name,
  } as Partial<FilterFieldConfig>);

export const KENNEL_OWNER_FILTER_FIELD: FilterFieldConfig = {
  ...simpleMainFilterFieldPart('OwnedByMe', 'Owned by me'),
  getFilter: () => byAny('Kennel.Owner', ME),
};

export const OWNER_FILTER_FIELD: FilterFieldConfig = {
  ...simpleMainFilterFieldPart('OwnedByMe', 'Owned by me'),
  getFilter: () => byAny('Owner', ME),
};

export const CREATED_BY_FILTER_FIELD: FilterFieldConfig = {
  ...simpleMainFilterFieldPart('CreatedByMe', 'Created by me'),
  getFilter: () => byAny('CreatedBy', ME),
};

export const PET_TYPE_FILTER = {
  ...simpleFilterLookupField('PetType'),

  component: 1,
  onChange: (params) => {
    if (params.value.Id) {
      // TODO Sex - change with same sex (by code)
      ['Sex', 'Breed'].forEach((fieldName) => {
        params.form?.get(fieldName)?.setValue(null);
      });
    }
  },
  placeholder: 'Type',
  isRequired: true,
  validators: [Validators.required],
  //   initBeforeChangeFn: (form, {}) => {
  //     form.get('PetType').setValue({
  //       Id: '1c0902b2-9bf4-47e2-91fd-c25f87151947',
  //       Name: 'Dog'
  //     });
  //   }
} as FilterFieldConfig;
