import { Validators } from '@angular/forms';
import { EmptyFieldConfig } from '@bh/superfield';
import {
  And,
  byDateRange,
  female,
  litterPetType,
  male,
  simpleFilterLookupField,
} from '@bh/filtering';
import { FilterFieldConfig } from '@bh/superfield';
import { FormFieldCode } from '@bh/consts';
import { merge } from 'lodash-es';

export const LITTER_PET_TYPE_FILTER = {
  ...simpleFilterLookupField('PetType'),
  component: FormFieldCode.DROPDOWN,
  onChange: (params) => {
    if (params.value?.Id) {
      ['Breed', 'Father', 'Mother'].forEach((fieldName) => {
        params.form?.get(fieldName)?.setValue(null);
      });
    }
  },
  placeholder: 'Type',
  isRequired: true,
  validators: [Validators.required],
} as FilterFieldConfig;

export const LITTER_BREED_FILTER = {
  ...simpleFilterLookupField('Breed'),
  filterFn: (options) => options.form?.simpleFilterById('PetType'),
  initBeforeChangeFn: async (form, extra) => {
    const breedId = form.get('Breed')?.value?.Id;
    const petType = form.get('PetType')?.value;
    if (breedId && !petType) {
      const result = await extra?.helper?.getBreedPetType(breedId);
      form?.get('PetType')?.setValue(result);
    }
  },
  // onChange: (value, { form, prev }) => {
  //   if (value?.Id) {
  //     ['CoatType', 'CoatColor'].forEach((fieldName) => {
  //       form.get(fieldName)?.setValue(null);
  //     });
  //   }
  // },
  placeholder: 'Breed',
} as FilterFieldConfig;
export const LITTER_STATUS_FILTER = {
  ...simpleFilterLookupField('Status'),
  component: FormFieldCode.DROPDOWN,
  entitySchemaName: 'LitterStatus',
  placeholder: 'Status',
} as FilterFieldConfig;
export const LITTER_FATHER_FILTER = {
  ...simpleFilterLookupField('Father'),
  entitySchemaName: 'Pet',
  filterFn: (options) =>
    And(options.form?.enableFilterByLookup(litterPetType, 'PetType'), male()),
  placeholder: 'Father',
} as FilterFieldConfig;
export const LITTER_MOTHER_FILTER = {
  ...simpleFilterLookupField('Mother'),
  entitySchemaName: 'Pet',
  filterFn: (options) =>
    And(options.form?.enableFilterByLookup(litterPetType, 'PetType'), female()),
  placeholder: 'Mother',
} as FilterFieldConfig;
export const LITTER_DATE_OF_BIRTH_FILTER = merge({}, EmptyFieldConfig, {
  active: (form) => {
    const value = form?.get('DateOfBirth')?.value;
    return value && Array.isArray(value) && value[0] && value[1];
  },
  displayValue: (options) => {
    const values: any[] = options.form?.get('DateOfBirth')?.value;
    return values.map((e) => e.getFullYear()).join('-');
  },
  entitiesColumns: [],
  getFilter: (options) => {
    const value = options.form?.get('DateOfBirth')?.value;
    if (value) {
      return byDateRange('DateOfBirth', value[0], value[1]);
    }
    return null;
  },
  //TODO validators
  id: 'DateOfBirth',
  placeholder: 'Date of birth',
  component: FormFieldCode.DATE_RANGE,
} as Partial<FilterFieldConfig>);
