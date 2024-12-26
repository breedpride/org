import { Validators } from '@angular/forms';
import { FormFieldCode, ModelCodeType } from '@bh/consts';
import { EmptyFieldConfig } from '@bh/superfield';
import { DEFAULT_LIST } from '@bh/collection-view-change';
import { ACCOUNT_ENTITY_COLUMNS } from '@bh/entity/config';
import {
  AccountByBreed,
  AccountByPetType,
  byAny,
  FIELD_NAMES_LOOKUP_WITH_URL,
  FIELD_NAMES_SPACE_MINIMUM,
  NAME_FILTER,
  simpleFilterLookupField,
} from '@bh/filtering';
import { KENNEL_SPACE_SORT_CONFIG } from '@bh/collection-sorting';
import { getSpaceConfig } from '@bh/collection-store';

import { SPACE_URL_KENNEL } from '@bh/space-url';
import { FilterFieldConfig, MiniSpaceApiConfig, SpaceConfig } from '@bh/superfield';
import { merge } from 'lodash-es';
import { createInjectionToken } from 'ngxtension/create-injection-token';

export const kennelExt: MiniSpaceApiConfig[] = [
  {
    entitiesColumns: [
      'Id',
      'Account',
      // 'Currency',
      // 'PetServiceStatus',
      // 'Price',
      'ServiceType',
    ],
    entitySchemaName: 'PetServiceInAccount',
    filterFields: [
      // {
      //   ...simpleFilter('Active'),
      //   getFilter: map =>
      //     byAny('PetServiceStatus', '5a314d87-0979-47da-b8b1-eb8372156cbf'),
      // } as FilterField,
    ],
    filterKey: 'Account',
    id: 'Services',
  },
];
export const SPACE_API_KENNEL = getSpaceConfig({
  sortConfig: KENNEL_SPACE_SORT_CONFIG,
  viewConfig: [
    {
      ...DEFAULT_LIST,
      card: ModelCodeType.KENNEL,
      loadComponent: () =>
        import(
          '../kennel-list-card/kennel-list-card.component'
        ).then((m) => m.KennelListCardComponent),
    },
  ],
  dateFields: [],
  url: SPACE_URL_KENNEL,
  // ACCOUNT_ENTITY_COLUMNS
  entitiesColumns: [
    ...FIELD_NAMES_SPACE_MINIMUM,
    'VerificationStatus.Id',
    'VerificationStatus.Name',
    'Owner.Name',
    // 'Country.Name',
    'CompanyFoundationDate',
    'Federation.AlternativeName',
  ],

  entityColumns: [...ACCOUNT_ENTITY_COLUMNS],
  model: 'Kennel',
  entitySchemaName: 'Account',
  filterConfig: [
    NAME_FILTER,
    merge({}, EmptyFieldConfig, {
      active: () => true,
      displayValue: () => 'Is Kennel',
      entitiesColumns: [],
      getFilter: () => byAny('Type', '5717637b-9886-465f-80d1-037ce9b86310'),
      id: 'IsKennel',
      hidden: () => true,
      placeholder: 'Is Kennel',
      component: FormFieldCode.BOOLEAN,
    } as Partial<FilterFieldConfig>),
    // {
    //   ...simpleFilterLookupField('Federation'),
    //   entitiesColumns: FIELD_NAMES_LOOKUP_WITH_URL,
    //   entitySchemaName: 'Account',
    //   filterFn: (form) => AccountByType('ece6b580-0fd8-4f22-8676-dbd7f75b97f5'),
    //   getFilter: (form) =>
    //     form.enableFilterByLookup(AccountByFederation, 'Federation'),
    //   placeholder: 'Federation'
    // } as FilterField,
    {
      ...simpleFilterLookupField('PetType'),
      component: FormFieldCode.DROPDOWN,
      getFilter: (options) =>
        options.form?.enableFilterByLookup(AccountByPetType, 'PetType'),
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
    } as FilterFieldConfig,
    {
      ...simpleFilterLookupField('Breed'),
      entitiesColumns: FIELD_NAMES_LOOKUP_WITH_URL,
      getFilter: (options) =>
        options.form?.enableFilterByLookup(AccountByBreed, 'Breed'),
      initBeforeChangeFn: async (form, extra) => {
        const breedId = form.get('Breed')?.value?.Id;
        const petType = form.get('PetType')?.value;
        if (breedId && !petType) {
          const result = await extra?.helper?.getBreedPetType(breedId);
          form.get('PetType')?.setValue(result);
        }
      },
      placeholder: 'Breed',
    } as FilterFieldConfig,
    {
      ...simpleFilterLookupField('Status'),
      component: FormFieldCode.DROPDOWN,
      entitySchemaName: 'AccountStatus',
      placeholder: 'Status',
    } as FilterFieldConfig,
    {
      ...simpleFilterLookupField('Country'),
      placeholder: 'Country',
    } as FilterFieldConfig,
  ],
  id: 'Kennel',
  isPublic: true,
});
export const SPACE_CONFIG_KENNEL: SpaceConfig = {
  ...SPACE_API_KENNEL,
  id: 'kennels',
  naming: {
    noSearchResults: 'There are no kennels!',
    plural: {
      no: 'no kennels',
      one: 'kennel',
      other: 'kennels',
    },
    searchPlaceholder: 'Search kennels',
    title: 'Kennels',
  },
} as const;
export const [, , KENNEL_SPACE_TOKEN] = createInjectionToken(
  () => SPACE_CONFIG_KENNEL
);
