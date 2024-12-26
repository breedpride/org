import {
  CREATED_BY_FILTER_FIELD,
  MAIN_FILTER_FIELD,
  NAME_FILTER,
  OWNER_FILTER_FIELD,
} from '@bh/filtering';
import { getSpaceConfig } from '@bh/collection-store';

import { SPACE_URL_COLLECTION, URL_MY } from '@bh/space-url';
import { FilterFieldConfig, SpaceConfig } from '@bh/superfield';
import { createInjectionToken } from 'ngxtension/create-injection-token';
import { MenuItem } from 'primeng/api';
import { SPACE_API_COLLECTION } from '../collection-page/collection-space';

const SPACE_MAIN_FILTER_FIELD: FilterFieldConfig = {
  ...MAIN_FILTER_FIELD,
  filterConfig: [OWNER_FILTER_FIELD, CREATED_BY_FILTER_FIELD],
  hidden: () => true,
};

export const SPACE_API_MY_COLLECTION: SpaceConfig = {
  ...SPACE_API_COLLECTION,
  filterConfig: [NAME_FILTER, SPACE_MAIN_FILTER_FIELD],
  id: 'MyBreedprideCollection',
};
export const SPACE_CONFIG_MY_COLLECTION = getSpaceConfig({
  ...SPACE_API_MY_COLLECTION,
  id: 'collections',
  url: URL_MY + '/' + SPACE_URL_COLLECTION,
  naming: {
    noSearchResults: 'There are no collections!',
    plural: {
      no: 'no collections',
      one: 'collection',
      other: 'collections',
    },
    searchPlaceholder: 'Search collections',
    title: 'Collections',
  },
});

export const [, , SPACE_CONFIG_MY_COLLECTION_TOKEN] = createInjectionToken(
  () => SPACE_CONFIG_MY_COLLECTION
);

export const MyCollectionSpacePageMenuItem: MenuItem = {
  badge: 'Professional',
  badgeAdditional: 'better with',
  icon: 'pi pi-clone',
  id: 'my-collections',
  label: 'Collections',
  mode: 'userMenu',
  queryParams: { mainFilter: 'OwnedByMe' },
  routerLink: ['/', URL_MY, SPACE_URL_COLLECTION],
};
