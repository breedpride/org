import { ModelCodeType } from '@bh/consts';
import { DEFAULT_LIST } from '@bh/collection-view-change';

import { NAME_FILTER } from '@bh/filtering';
import { getSpaceConfig } from '@bh/collection-store';

import { SPACE_URL_LOOKUP } from '@bh/space-url';
import { SpaceConfig } from '@bh/superfield';
import { createInjectionToken } from 'ngxtension/create-injection-token';
import { MenuItem } from 'primeng/api';

export const SPACE_API_LOOKUP = getSpaceConfig({
  dateFields: [],
  entitiesColumns: ['Name', 'Id'],
  entityColumns: [],
  url: SPACE_URL_LOOKUP,
  entitySchemaName: 'Lookup',
  filterConfig: [NAME_FILTER],
  id: 'Lookup',
  viewConfig: [
    {
      ...DEFAULT_LIST,
      card: ModelCodeType.LOOKUP,
      loadComponent: () =>
        import(
          '../../lookup-list-card/lookup-list-card.component'
        ).then((m) => m.LookupListCardComponent),
    },
  ],
});

export const SPACE_CONFIG_LOOKUP: SpaceConfig = {
  ...SPACE_API_LOOKUP,
  id: 'lookups',
  naming: {
    noSearchResults: 'There are no breeds!',
    plural: {
      no: 'no dictionaries',
      one: 'dictionary',
      other: 'dictinaries',
    },
    searchPlaceholder: 'Search dictionaries',
    title: 'Dictionaries',
  },
} as const;
export const [, , LOOKUP_SPACE_TOKEN] = createInjectionToken(
  () => SPACE_CONFIG_LOOKUP
);

export const LookupSpacePageMenuItem: MenuItem = {
  icon: 'pi pi-book',
  id: 'dictionaries',
  label: 'Dictionaries',
  mode: 'userMenu',
  routerLink: '/' + SPACE_URL_LOOKUP,
};
