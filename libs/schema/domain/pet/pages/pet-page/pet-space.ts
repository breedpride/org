import { ModelCodeType } from '@bh/consts';
import {
  DEFAULT_GRAPH,
  DEFAULT_GRID,
  DEFAULT_LIST,
  DEFAULT_MAP,
  DEFAULT_TABLE,
} from '@bh/collection-view-change';
import {
  PET_DATE_FIELDS,
  PET_ENTITY_COLUMNS,
  PET_FIELD_CONFIG,
} from '@bh/entity/config';
import {
  FIELD_NAMES_SPACE_MINIMUM,
  NAME_FILTER,
  PET_TYPE_FILTER,
} from '@bh/filtering';
import { PET_SPACE_SORT_CONFIG } from '@bh/collection-sorting';
import { getSpaceConfig } from '@bh/collection-store';

import { SPACE_URL_PET } from '@bh/space-url';
import { FilterFieldConfig, SpaceConfig } from '@bh/superfield';
import { createInjectionToken } from 'ngxtension/create-injection-token';
import {
  PET_BREED_FILTER,
  PET_COAT_COLOR_FILTER,
  PET_COAT_TYPE_FILTER,
  PET_COUNTRY_OF_STAY_FILTER,
  PET_DATE_OF_BIRTH_FILTER,
  PET_SEX_FILTER,
  PET_STATUS_FILTER,
} from './pet-filters';

export const petFieldsConfig: Record<
  keyof typeof PET_FIELD_CONFIG,
  FilterFieldConfig
> = {
  ...PET_FIELD_CONFIG,
  DateOfDeath: {
    ...PET_FIELD_CONFIG.DateOfDeath,
    hidden: (form) =>
      !(
        form.get('PetStatus')?.value?.Id ===
        '344ceb3c-d2b5-484f-bf4d-0c920df08d4f'
      ),
  } as FilterFieldConfig,
};

export const petFilterFields: FilterFieldConfig[] = [
  NAME_FILTER,
  PET_TYPE_FILTER,
  PET_BREED_FILTER,
  PET_STATUS_FILTER,
  PET_SEX_FILTER,
  PET_COAT_TYPE_FILTER,
  PET_COAT_COLOR_FILTER,
  PET_COUNTRY_OF_STAY_FILTER,
  PET_DATE_OF_BIRTH_FILTER,
];

export const petEntitiesColumns: string[] = [
  ...FIELD_NAMES_SPACE_MINIMUM,
  'Sex.Id',
  'Sex.Code',
  'Sex.Name',
  'PetStatus.Id',
  'PetStatus.Name',
  'DateOfBirth',
  'VerificationStatus.Id',
  'VerificationStatus.Name',
  'COI',
];
export const petEntityCoumns: string[] = [
  ...PET_ENTITY_COLUMNS,
  // 'Cover.AvatartUrl',
  //TODO - make like plugin
  'Cover.AvatarUrl',
  'Cover.Type.Id',
];

export const SPACE_API_PET = getSpaceConfig({
  sortConfig: PET_SPACE_SORT_CONFIG,
  viewConfig: [
    {
      ...DEFAULT_LIST,
      card: ModelCodeType.PET,
      loadComponent: () =>
        import(
          '../../lib/pet-list-card/pet-list-card.component'
        ).then((m) => m.PetListCardComponent),
    },
    {
      ...DEFAULT_GRID,
      card: ModelCodeType.PET,
      loadComponent: () =>
        import(
          '../../lib//pet-grid-card/pet-grid-card.component'
        ).then((m) => m.PetGridCardComponent),
    },
    {
      ...DEFAULT_MAP,
      card: ModelCodeType.PET,
      loadComponent: () =>
        import(
          '../../lib/pet-grid-card/pet-grid-card.component'
        ).then((m) => m.PetGridCardComponent),
    },
    {
      ...DEFAULT_GRAPH,
      card: ModelCodeType.PET,
      loadComponent: () =>
        import(
          '../../lib/pet-grid-card/pet-grid-card.component'
        ).then((m) => m.PetGridCardComponent),
    },
    {
      ...DEFAULT_TABLE,
      card: ModelCodeType.PET,
      loadComponent: () =>
        import(
          '../../lib/pet-grid-card/pet-grid-card.component'
        ).then((m) => m.PetGridCardComponent),
    },
  ],
  canAdd: true,
  canEdit: true, // Fo record
  dateFields: PET_DATE_FIELDS, // Maybe link to field? not name? but EntityChemaName
  url: SPACE_URL_PET,
  entitiesColumns: petEntitiesColumns,
  entityColumns: petEntityCoumns,
  entitySchemaName: 'Pet',
  fieldsConfig: petFieldsConfig,
  filterConfig: petFilterFields,
  id: 'Pet',
  isPublic: true,
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
});

export const SPACE_CONFIG_PET: SpaceConfig = {
  ...SPACE_API_PET,
  // id: 'pets',
} as const;

export const [, , PET_SPACE_TOKEN] = createInjectionToken(
  () => SPACE_CONFIG_PET
);
