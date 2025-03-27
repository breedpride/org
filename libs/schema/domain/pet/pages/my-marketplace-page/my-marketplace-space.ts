import { ModelCodeType } from '@bh/windmill';
import { EmptyFieldConfig } from '@bh/superfield';
import { DEFAULT_GRID } from '@bh/collection-view-change';
import {
  FIELD_NAMES_LOOKUP_MINIMUN,
  isMarketplace,
  MAIN_FILTER_FIELD,
  NAME_FILTER,
  OWNER_FILTER_FIELD,
  PET_TYPE_FILTER,
} from '@bh/filtering';
import { getSpaceConfig } from '@bh/collection-store';

import { SPACE_URL_MARKETPLACE, URL_MY } from '@bh/space-url';
import { FilterFieldConfig, SpaceConfig } from '@bh/superfield';
import { merge } from 'lodash-es';
import { MenuItem } from 'primeng/api';
import {
  PET_BREED_FILTER,
  PET_SEX_FILTER,
  PET_STATUS_FILTER,
} from '../pet-page/pet-filters';
import { createInjectionToken } from 'ngxtension/create-injection-token';

export const SPACE_API_MY_MARKETPLACE = getSpaceConfig({
  dateFields: [],
  url: URL_MY + '/' + SPACE_URL_MARKETPLACE,
  entitiesColumns: [...FIELD_NAMES_LOOKUP_MINIMUN],
  entityColumns: [],
  model: 'Marketplace',
  entitySchemaName: 'Pet',
  filterConfig: [
    NAME_FILTER,
    {
      ...MAIN_FILTER_FIELD,
      filterConfig: [OWNER_FILTER_FIELD],
      hidden: () => true,
    },
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
    PET_SEX_FILTER,
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

export const SPACE_CONFIG_MY_MARKETPLACE: SpaceConfig = {
  ...SPACE_API_MY_MARKETPLACE,

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
};
export const [, , SPACE_CONFIG_MY_MARKETPLACE_TOKEN] = createInjectionToken(
  () => SPACE_CONFIG_MY_MARKETPLACE
);

// export const MyMarketplaceSpacePage: Route = {
//   loadChildren: () => buildSpaceRoutes(SPACE_CONFIG_MY_MARKETPLACE),
//   path: SPACE_URL_MARKETPLACE,
// };

export const MyMarketplaceSpacePageMenuItem: MenuItem = {
  badge: '',
  badgeAdditional: 'better with',
  icon: 'marketplace',
  id: 'my-marketplace',
  label: 'Marketplace',
  mode: 'userMenu',
  queryParams: { mainFilter: 'OwnedByMe' },
  routerLink: ['/', URL_MY, SPACE_URL_MARKETPLACE],
};
