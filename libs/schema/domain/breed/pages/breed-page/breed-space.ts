import { ModelCodeType } from '@bh/windmill';
import { DEFAULT_LIST } from '@bh/collection-view-change';
import {
  FIELD_NAMES_SPACE_MINIMUM,
  NAME_FILTER,
  PET_TYPE_FILTER,
} from '@bh/filtering';
import { BREED_SPACE_SORT_CONFIG } from '@bh/collection-sorting';
import { getSpaceConfig } from '@bh/collection-store';

import { SPACE_URL_BREED } from '@bh/space-url';
import { SpaceConfig } from '@bh/superfield';
import { createInjectionToken } from 'ngxtension/create-injection-token';

export const SPACE_API_BREED = getSpaceConfig({
  sortConfig: BREED_SPACE_SORT_CONFIG,
  viewConfig: [
    // {
    //   ...DEFAULT_LIST,
    //   card: ModelCodeType.PET,
    //   loadComponent: () =>
    //     import(
    //       'libs/schema/domain/pet/lib/pet-list-card/pet-list-card.component'
    //     ).then(m => m.PetListCardComponent),
    // },
    {
      ...DEFAULT_LIST,
      card: ModelCodeType.BREED,
      loadComponent: () =>
        import(
          '../../lib/breed-list-card/breed-list-card.component'
        ).then((m) => m.BreedListCardComponent),
    },
  ],
  dateFields: [],
  url: SPACE_URL_BREED,
  entitiesColumns: [
    ...FIELD_NAMES_SPACE_MINIMUM,
    'PetProfileCount',
    'KennelCount',
    'PatronCount',
    'AchievementProgress',
  ],
  entitySchemaName: 'Breed',
  filterConfig: [
    NAME_FILTER,
    {
      ...PET_TYPE_FILTER,
      isRequired: true,
    },
  ],
  id: 'Breed',
  isPublic: true,
  naming: {
    noSearchResults: 'There are no breeds!',
    plural: {
      no: 'no breeds',
      one: 'breed',
      other: 'breeds',
    },
    searchPlaceholder: 'Search breeds',
    title: 'Breeds',
  },
});

export const SPACE_CONFIG_BREED: SpaceConfig = {
  ...SPACE_API_BREED,
};
export const [, , BREED_SPACE_TOKEN] = createInjectionToken(
  () => SPACE_CONFIG_BREED
);
