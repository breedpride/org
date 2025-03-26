import { dictionaryValidator} from '@bh/consts';
import { EmptyFieldConfig, FilterFieldConfig } from '@bh/superfield';

import { merge } from 'lodash-es';
import { simpleNameFilter } from '@bh/filter';
import { FormFieldCode } from '@bh/windmill';

export const MAIN_FILTER_NAME = 'mainFilter';

export const FIELD_NAMES_LOOKUP_MINIMUN = ['Id', 'Name'];

export const FIELD_NAMES_LOOKUP_WITH_URL = [
  ...FIELD_NAMES_LOOKUP_MINIMUN,
  'Url',
];

export const FIELD_NAMES_SPACE_MINIMUM = [
  ...FIELD_NAMES_LOOKUP_WITH_URL,
  'AvatarUrl',
];

export const FIELD_NAMES_FOR_GET_BY_ID = [...FIELD_NAMES_LOOKUP_MINIMUN];

export const lookupFilterField = merge({}, EmptyFieldConfig, {
  entitiesColumns: FIELD_NAMES_LOOKUP_MINIMUN,
  entityColumns: FIELD_NAMES_FOR_GET_BY_ID,
  component: FormFieldCode.AUTOCOMPLETE,
  validators: [dictionaryValidator],
});

export const NAME_FILTER: FilterFieldConfig = {
  ...EmptyFieldConfig,
  active: (form) => form?.get('Name')?.value,
  displayValue: (options) => options.form?.get('Name')?.value,
  getFilter: (options) =>
    options.form && options.form.get('Name')
      ? simpleNameFilter(
        options.form as { get: (name: string) => { value: any } },
        'Name'
      )
      : undefined,
  id: 'Name',
  onChange: (value) => {
    console.log('SearchName Changed');
  },
  placeholder: 'Search',
  component: FormFieldCode.SearchName,
};
