import { ModelCodeType } from '@bh/consts';
import { DEFAULT_LIST } from '@bh/collection-view-change';
import { PET_DATE_FIELDS } from '@bh/entity/config';
import {
  CREATED_BY_FILTER_FIELD,
  MAIN_FILTER_FIELD,
  myBreeding,
  NAME_FILTER,
  OWNER_FILTER_FIELD,
  PET_TYPE_FILTER,
  simpleMainFilterFieldPart,
} from '@bh/filtering';
import { getSpaceConfig } from '@bh/collection-store';

import { SPACE_URL_PET, URL_MY } from '@bh/space-url';
import { FilterFieldConfig, SpaceConfig } from '@bh/superfield';
import { MenuItem } from 'primeng/api';
import {
  PET_BREED_FILTER,
  PET_SEX_FILTER,
  PET_STATUS_FILTER,
} from '../pet-page/pet-filters';
import { petEntitiesColumns, petEntityCoumns } from '../pet-page/pet-space';
import { createInjectionToken } from 'ngxtension/create-injection-token';

const SPACE_MAIN_FILTER_FIELD: FilterFieldConfig = {
  ...MAIN_FILTER_FIELD,
  filterConfig: [
    OWNER_FILTER_FIELD,
    CREATED_BY_FILTER_FIELD,

    {
      ...simpleMainFilterFieldPart('BreededByMe', 'Breeded by me'),
      getFilter: () => myBreeding,
    },
  ],
};

export const myPetAPI = getSpaceConfig({
  canAdd: true,
  canEdit: true,
  dateFields: PET_DATE_FIELDS,
  entitiesColumns: petEntitiesColumns,
  entityColumns: petEntityCoumns,
  entitySchemaName: 'Pet',
  filterConfig: [
    NAME_FILTER,
    SPACE_MAIN_FILTER_FIELD,
    PET_TYPE_FILTER,
    PET_BREED_FILTER,
    PET_STATUS_FILTER,
    PET_SEX_FILTER,
  ],
  id: 'Pet',
  viewConfig: [
    {
      ...DEFAULT_LIST,
      card: ModelCodeType.PET,
      loadComponent: () =>
        import('../../lib/pet-list-card/pet-list-card.component').then((m) => m.PetListCardComponent),
    },
  ],
});

export const SPACE_CONFIG_MY_PET: SpaceConfig = {
  ...myPetAPI,
  id: URL_MY + SPACE_URL_PET,
  url: URL_MY + '/' + SPACE_URL_PET,
  naming: {
    noSearchResults: 'There are no pets!',
    plural: {
      no: 'No pets',
      one: 'pet',
      other: 'pets',
    },
    searchPlaceholder: 'Search pets',
    title: 'Pets',
  },
};
export const [, , SPACE_CONFIG_MY_PET_TOKEN] = createInjectionToken(
  () => SPACE_CONFIG_MY_PET
);

export const MyPetSpacePageMenuItem: MenuItem = {
  icon: 'paw',
  id: 'my-pets',
  label: 'Pets',
  mode: 'userMenu',
  queryParams: { mainFilter: 'OwnedByMe' },
  routerLink: ['/', URL_MY, SPACE_URL_PET],
};
