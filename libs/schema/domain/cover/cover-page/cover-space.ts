import { ModelCodeType } from '@bh/windmill';
import { DEFAULT_GRID } from '@bh/collection-view-change';
import {
  CREATED_BY_FILTER_FIELD,
  FIELD_NAMES_SPACE_MINIMUM,
  MAIN_FILTER_FIELD,
  NAME_FILTER,
  OWNER_FILTER_FIELD,
} from '@bh/filtering';
import { getSpaceConfig } from '@bh/collection-store';

import { SPACE_URL_COVER, URL_MY } from '@bh/space-url';
import { FilterFieldConfig } from '@bh/superfield';
import { createInjectionToken } from 'ngxtension/create-injection-token';
import { MenuItem } from 'primeng/api';
const SPACE_MAIN_FILTER_FIELD: FilterFieldConfig = {
  ...MAIN_FILTER_FIELD,
  filterConfig: [OWNER_FILTER_FIELD, CREATED_BY_FILTER_FIELD],
  hidden: () => true,
};

export const SPACE_CONFIG_COVER = getSpaceConfig({
  canAdd: true,
  canEdit: true,
  dateFields: [],
  url: URL_MY + '/' + SPACE_URL_COVER,
  entitiesColumns: [
    ...FIELD_NAMES_SPACE_MINIMUM,
    'Type.Id',
    'Type.Name',
    'IsDefault',
  ],
  entityColumns: [...FIELD_NAMES_SPACE_MINIMUM],
  entitySchemaName: 'Cover',
  filterConfig: [NAME_FILTER, SPACE_MAIN_FILTER_FIELD],
  viewConfig: [
    {
      ...DEFAULT_GRID,
      card: ModelCodeType.COVER,
      loadComponent: () =>
        import(
          '../lib/cover-grid-card/cover-grid-card.component'
        ).then((m) => m.CoverGridCardComponent),
    },
  ],

  id: 'BreedprideCover',
  naming: {
    noSearchResults: 'There are no covers!',
    plural: {
      no: 'no covers',
      one: 'cover',
      other: 'covers',
    },
    searchPlaceholder: 'Search covers',
    title: 'Covers',
  },
});

export const [, , SPACE_CONFIG_COVER_TOKEN] = createInjectionToken(
  () => SPACE_CONFIG_COVER
);

export const CoverSpacePageMenuItem: MenuItem = {
  badge: 'Professional',
  icon: 'pi pi-image',
  id: 'my-covers',
  label: 'Covers',
  mode: 'userMenu',
  queryParams: { mainFilter: 'OwnedByMe' },
  routerLink: ['/', URL_MY, SPACE_URL_COVER],
};
