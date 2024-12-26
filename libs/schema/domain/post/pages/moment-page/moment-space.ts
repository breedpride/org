import { FormFieldCode } from '@bh/consts';
import { EmptyFieldConfig,FilterFieldConfig, SpaceConfig } from '@bh/superfield';
import { DEFAULT_GRID } from '@bh/collection-view-change';
import {  NAME_FILTER } from '@bh/filtering';
import { byAny} from '@bh/filter'
import { getSpaceConfig } from '@bh/collection-store';

import { SPACE_URL_MOMENT } from '@bh/space-url';

import { merge } from 'lodash-es';
import { createInjectionToken } from 'ngxtension/create-injection-token';

// moment
export const momentApi = getSpaceConfig({
  dateFields: [],
  url: SPACE_URL_MOMENT,
  entitiesColumns: ['Name', 'Url', 'Id'],
  entityColumns: [],
  model: 'Moment',
  entitySchemaName: 'Post',
  filterConfig: [
    NAME_FILTER,
    merge({}, EmptyFieldConfig, {
      active: () => true,
      displayValue: () => 'Is Moment',
      entitiesColumns: [],
      getFilter: () => byAny('IsMoment', true),
      id: 'IsMoment',
      hidden: () => true,
      placeholder: 'Is Moment',
      component: FormFieldCode.BOOLEAN,
    } as Partial<FilterFieldConfig>),
  ],
  viewConfig: [
    {
      ...DEFAULT_GRID,
      loadComponent: () =>
        import(
          '@breedpride/note'
        ).then((m) => m.NoteGridCardComponent),
    },
  ],
  id: 'Moment',
  naming: {
    noSearchResults: 'There are no moments!',
    plural: {
      no: 'no moments',
      one: 'moment',
      other: 'moments',
    },
    searchPlaceholder: 'Search moments',
    title: 'Moments',
  },
});
export const SPACE_CONFIG_MOMENT: SpaceConfig = {
  ...momentApi,
  url: SPACE_URL_MOMENT,
} as const;
export const [, , MOMENT_SPACE_TOKEN] = createInjectionToken(
  () => SPACE_CONFIG_MOMENT
);
