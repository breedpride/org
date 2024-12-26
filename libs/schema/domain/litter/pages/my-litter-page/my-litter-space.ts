import { ModelCodeType } from '@bh/consts';
import { DEFAULT_LIST } from '@bh/collection-view-change';
import { LITTER_ENTITY_COLUMNS } from '@bh/entity/config';
import {
  CREATED_BY_FILTER_FIELD,
  FIELD_NAMES_LOOKUP_MINIMUN,
  KENNEL_OWNER_FILTER_FIELD,
  MAIN_FILTER_FIELD,
  NAME_FILTER,
} from '@bh/filtering';
import { getSpaceConfig } from '@bh/collection-store';

import { SPACE_URL_LITTER, URL_MY } from '@bh/space-url';
import { SpaceConfig } from '@bh/superfield';
import { MenuItem } from 'primeng/api';
import {
  LITTER_BREED_FILTER,
  LITTER_DATE_OF_BIRTH_FILTER,
  LITTER_FATHER_FILTER,
  LITTER_MOTHER_FILTER,
  LITTER_PET_TYPE_FILTER,
  LITTER_STATUS_FILTER,
} from '../litter-page/litter-filters';
import { createInjectionToken } from 'ngxtension/create-injection-token';

const SPACE_API_LITTER = getSpaceConfig({
  canAdd: false,
  canEdit: true,
  dateFields: ['Date'],
  url: SPACE_URL_LITTER,
  entitiesColumns: [
    ...FIELD_NAMES_LOOKUP_MINIMUN,
    'Status.Name',
    'Father.Name',
    'Mother.Name',
  ],
  entityColumns: [...LITTER_ENTITY_COLUMNS],
  entitySchemaName: 'Litter',
  filterConfig: [
    NAME_FILTER,
    {
      ...MAIN_FILTER_FIELD,
      filterConfig: [KENNEL_OWNER_FILTER_FIELD, CREATED_BY_FILTER_FIELD],
      hidden: () => true,
    },
    LITTER_PET_TYPE_FILTER,
    LITTER_BREED_FILTER,
    LITTER_STATUS_FILTER,
    LITTER_DATE_OF_BIRTH_FILTER,
    LITTER_FATHER_FILTER,
    LITTER_MOTHER_FILTER,
  ],
  id: 'litters',
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
});

export const SPACE_CONFIG_MY_LITTER: SpaceConfig = {
  ...SPACE_API_LITTER,
  url: URL_MY + '/' + SPACE_URL_LITTER,
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
};
export const [, , SPACE_CONFIG_MY_LITTER_TOKEN] = createInjectionToken(
  () => SPACE_CONFIG_MY_LITTER
);

export const MyLitterSpacePageMenuItem: MenuItem = {
  badge: 'Professional',
  icon: 'litter',
  id: 'my-litters',
  label: 'Litters',
  mode: 'userMenu',
  queryParams: { mainFilter: 'OwnedByMe' },
  routerLink: ['/', URL_MY, SPACE_URL_LITTER],
};
