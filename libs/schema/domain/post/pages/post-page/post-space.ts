import { ModelCodeType } from '@bh/consts';
import { DEFAULT_GRID } from '@bh/collection-view-change';
import { NAME_FILTER } from '@bh/filtering';
import { getSpaceConfig } from '@bh/collection-store';

import { SPACE_URL_POST } from '@bh/space-url';
import { SpaceConfig } from '@bh/superfield';
import { createInjectionToken } from 'ngxtension/create-injection-token';

// post
export const postApi = getSpaceConfig({
  dateFields: [],
  url: SPACE_URL_POST,
  entitiesColumns: ['Name', 'Url', 'Id'],
  entityColumns: [],
  model: 'Post',
  entitySchemaName: 'Post',
  filterConfig: [NAME_FILTER],
  viewConfig: [
    {
      ...DEFAULT_GRID,
      card: ModelCodeType.POST,
      loadComponent: () =>
        import(
          '@breedpride/note'
        ).then((m) => m.NoteGridCardComponent),
    },
  ],
  id: 'Post',
});
export const SPACE_CONFIG_POST: SpaceConfig = {
  ...postApi,
  url: SPACE_URL_POST,
  // id: 'posts',
  naming: {
    noSearchResults: 'There are no posts!',
    plural: {
      no: 'no posts',
      one: 'post',

      other: 'posts',
    },
    searchPlaceholder: 'Search posts',
    title: 'Posts',
  },
} as const;
export const [, , POST_SPACE_TOKEN] = createInjectionToken(
  () => SPACE_CONFIG_POST
);
