import { ModelCodeType } from '@bh/windmill';
import { DEFAULT_GRID } from '@bh/collection-view-change';
import { FIELD_NAMES_SPACE_MINIMUM, NAME_FILTER } from '@bh/filtering';
import { getSpaceConfig } from '@bh/collection-store';

import { SPACE_URL_COLLECTION } from '@bh/space-url';
import { createInjectionToken } from 'ngxtension/create-injection-token';
export const SPACE_API_COLLECTION = getSpaceConfig({

  url: SPACE_URL_COLLECTION,
  entitiesColumns: [...FIELD_NAMES_SPACE_MINIMUM],
  entitySchemaName: 'BreedprideCollection',
  filterConfig: [NAME_FILTER],
  viewConfig: [
    {
      ...DEFAULT_GRID,
      card: ModelCodeType.NOTE,
      loadComponent: () =>
        import('@breedpride/note'

        ).then((m) => m.NoteGridCardComponent),
    },
  ],
  id: 'BreedprideCollection',
});

export const SPACE_CONFIG_COLLECTION = getSpaceConfig({
  ...SPACE_API_COLLECTION,
  id: 'collections',
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
export const [, , COLLECTION_SPACE_TOKEN] = createInjectionToken(
  () => SPACE_CONFIG_COLLECTION
);
