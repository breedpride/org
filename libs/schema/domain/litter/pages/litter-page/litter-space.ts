import {  ModelCodeType } from '@bh/windmill';
import { DEFAULT_LIST } from '@bh/collection-view-change';
import { LITTER_ENTITY_COLUMNS } from '@bh/entity/config';
import {
  FIELD_NAMES_LOOKUP_MINIMUN,
  NAME_FILTER,
  simpleFilterLookupField,
} from '@bh/filtering';
import { LITTER_SPACE_SORT_CONFIG } from '@bh/collection-sorting';
import { getSpaceConfig } from '@bh/collection-store';

import { SPACE_URL_LITTER } from '@bh/space-url';
import { MiniSpaceApiConfig, SpaceConfig } from '@bh/superfield';
import { createInjectionToken } from 'ngxtension/create-injection-token';
import {
  LITTER_BREED_FILTER,
  LITTER_DATE_OF_BIRTH_FILTER,
  LITTER_FATHER_FILTER,
  LITTER_MOTHER_FILTER,
  LITTER_PET_TYPE_FILTER,
  LITTER_STATUS_FILTER,
} from './litter-filters';
import { FormFieldCode } from '@bh/windmill';

export const litterExt: MiniSpaceApiConfig[] = [
  {
    entitiesColumns: [
      'Id',
      'Litter',
      'Currency',
      'PetServiceStatus',
      'Price',
      'ServiceType',
    ],
    entitySchemaName: 'PetServiceInLitter',
    filterFields: [],
    filterKey: 'Litter',
    id: 'Services',
  },
];

export const SPACE_API_LITTER = getSpaceConfig({
  sortConfig: LITTER_SPACE_SORT_CONFIG,
  viewConfig: [
    {
      ...DEFAULT_LIST,
      card: ModelCodeType.LITTER,
      loadComponent: () =>
        import(
          '../../lib/litter-list-card/litter-list-card.component'
        ).then((m) => m.LitterListCardComponent),
    },
  ],
  canAdd: false,
  canEdit: true,
  dateFields: ['Date'],
  url: SPACE_URL_LITTER,
  entitiesColumns: [
    ...FIELD_NAMES_LOOKUP_MINIMUN,
    'Status.Name',
    'Kennel.Name',
    // 'Father.Name',
    // 'Mother.Name',
  ],
  entityColumns: [
    ...LITTER_ENTITY_COLUMNS,
    'Father.Breed.Id',
    'Father.Breed.Name',
    'Kennel.Country.Id',
    'Kennel.Country.Name',
  ],
  model: 'Litter',
  entitySchemaName: 'Litter',
  filterConfig: [
    NAME_FILTER,
    LITTER_PET_TYPE_FILTER,
    LITTER_BREED_FILTER,
    LITTER_STATUS_FILTER,
    {
      ...simpleFilterLookupField('Service'),
      component: FormFieldCode.DROPDOWN,
      entitySchemaName: 'PetServiceType',
      placeholder: 'Service',
    },
    LITTER_FATHER_FILTER,
    LITTER_MOTHER_FILTER,
    LITTER_DATE_OF_BIRTH_FILTER,
  ],
  id: 'litters',
  isPublic: true,
});

export const SPACE_CONFIG_LITTER: SpaceConfig = {
  ...SPACE_API_LITTER,
  id: 'litters',
  naming: {
    noSearchResults: 'There are no litters!',
    plural: {
      no: 'no litters',
      one: 'litters',
      other: 'litters',
    },
    searchPlaceholder: 'Search litters',
    title: 'Litters',
  },
} as const;
export const [, , LITTER_SPACE_TOKEN] = createInjectionToken(
  () => SPACE_CONFIG_LITTER
);
