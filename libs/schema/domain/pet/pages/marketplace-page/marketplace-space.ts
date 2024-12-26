import { ModelCodeType } from '@bh/consts';
import { EmptyFieldConfig } from '@bh/superfield';
import { DEFAULT_GRID } from '@bh/collection-view-change';
import {
  FIELD_NAMES_LOOKUP_MINIMUN,
  isMarketplace,
  NAME_FILTER,
  PET_TYPE_FILTER,
  simpleFilterLookupField,
} from '@bh/filtering';
import { getSpaceConfig } from '@bh/collection-store';

import { SPACE_URL_MARKETPLACE } from '@bh/space-url';
import { FilterFieldConfig, SpaceConfig } from '@bh/superfield';
import { FormFieldCode } from '@bh/consts';
import { merge } from 'lodash-es';
import { createInjectionToken } from 'ngxtension/create-injection-token';
import {
  PET_BREED_FILTER,
  PET_COAT_COLOR_FILTER,
  PET_COAT_TYPE_FILTER,
  PET_COUNTRY_OF_STAY_FILTER,
  PET_DATE_OF_BIRTH_FILTER,
  PET_SEX_FILTER,
  PET_STATUS_FILTER,
} from '../pet-page/pet-filters';

export const SPACE_API_MARKETPLACE = getSpaceConfig({
  dateFields: [],
  url: SPACE_URL_MARKETPLACE,
  entitiesColumns: [...FIELD_NAMES_LOOKUP_MINIMUN],
  entityColumns: [],
  model: 'Marketplace',
  entitySchemaName: 'Pet',
  filterConfig: [
    NAME_FILTER,
    merge({}, EmptyFieldConfig, {
      active: () => true,
      displayValue: () => 'isMarketplace',
      entitySchemaName: 'null',
      getFilter: () => isMarketplace(),
      id: 'marketplace',
      hidden: () => true,
    } as Partial<FilterFieldConfig>),
    PET_TYPE_FILTER,
    PET_BREED_FILTER,
    PET_STATUS_FILTER,
    PET_DATE_OF_BIRTH_FILTER,
    PET_SEX_FILTER,
    {
      ...simpleFilterLookupField('Service'),
      component: FormFieldCode.DROPDOWN,
      entitySchemaName: 'PetServiceType',
      placeholder: 'Service',
    },
    PET_COAT_TYPE_FILTER,
    PET_COAT_COLOR_FILTER,
    {
      ...simpleFilterLookupField('CountryOfBirth'),
      entitySchemaName: 'Country',
      placeholder: 'Country of birth',
    },
    PET_COUNTRY_OF_STAY_FILTER,
  ],
  viewConfig: [
    {
      ...DEFAULT_GRID,
      card: ModelCodeType.PET,
      loadComponent: () =>
        import(
          '../../lib/pet-grid-card/pet-grid-card.component'
        ).then((m) => m.PetGridCardComponent),
    },
  ],
  id: 'marketplace',
});

export const SPACE_CONFIG_MARKETPLACE: SpaceConfig = {
  ...SPACE_API_MARKETPLACE,
  url: SPACE_URL_MARKETPLACE,
  id: 'marketplace',
  naming: {
    noSearchResults: 'There are no pets!',
    plural: {
      no: 'no variants',
      one: 'variants',
      other: 'variants',
    },
    searchPlaceholder: 'Search pets',
    title: 'Marketplace',
  },
} as const;
export const [, , MARKETPLACE_SPACE_TOKEN] = createInjectionToken(
  () => SPACE_CONFIG_MARKETPLACE
);
