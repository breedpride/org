import {
  byDateRange,
  coatColorByBreed,
  coatTypeByBreed,
  simpleFilterLookupField,
} from '@bh/filtering';
import { FilterFieldConfig } from '@bh/superfield';
import { FormFieldCode } from '@bh/consts';
import { EmptyFieldConfig } from '@bh/superfield';

export const PET_BREED_FILTER = {
  ...simpleFilterLookupField('Breed'),
  filterFn: (options) => options.form?.simpleFilterById('PetType'),
  initBeforeChangeFn: async (form, extra) => {
    const breedId = form.get('Breed')?.value?.Id;
    const petType = form.get('PetType')?.value;
    if (breedId && !petType) {
      const result = await extra?.helper?.getBreedPetType(breedId);
      form.get('PetType')?.setValue(result);
    }
  },
  onChange: ({ value, form }) => {
    if (value?.Id) {
      ['CoatType', 'CoatColor'].forEach((fieldName) => {
        form?.get(fieldName)?.setValue(null);
      });
    }
  },
  placeholder: 'Breed',
} as FilterFieldConfig;

export const PET_STATUS_FILTER = {
  ...simpleFilterLookupField('PetStatus'),
  component: FormFieldCode.DROPDOWN,
  placeholder: 'Status',
} as FilterFieldConfig;

export const PET_SEX_FILTER = {
  ...simpleFilterLookupField('Sex'),
  component: FormFieldCode.DROPDOWN,
  filterFn: (options) => options.form?.simpleFilterById('PetType'),
  placeholder: 'Sex',
} as FilterFieldConfig;

export const PET_COUNTRY_OF_STAY_FILTER = {
  ...simpleFilterLookupField('CountryOfStay'),
  entitySchemaName: 'Country',
  placeholder: 'Country of stay',
} as FilterFieldConfig;
export const PET_COAT_TYPE_FILTER = {
  ...simpleFilterLookupField('CoatType'),
  filterFn: (options) =>
    options.form?.enableFilterByLookup(coatTypeByBreed, 'Breed'),
  placeholder: 'Coat type',
} as FilterFieldConfig;
export const PET_COAT_COLOR_FILTER = {
  ...simpleFilterLookupField('CoatColor'),
  filterFn: (options) =>
    options.form?.enableFilterByLookup(coatColorByBreed, 'Breed'),
  placeholder: 'Coat color',
} as FilterFieldConfig;
export const PET_DATE_OF_BIRTH_FILTER: FilterFieldConfig = {
  ...EmptyFieldConfig,
  active: (form) => {
    const value = form.get('DateOfBirth')?.value;
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
  initBeforeChangeFn: () => {},
  initFn: () => {},
  onChange: () => {},
  isRequired: false,
};
