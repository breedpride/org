import { CONTACT_DATE_FIELDS, CONTACT_ENTITY_COLUMNS } from '@bh/entity/config';
import { FIELD_NAMES_SPACE_MINIMUM, PET_TYPE_FILTER } from '@bh/filtering';
import { getSpaceConfig } from '@bh/collection-store';

import { FilterFieldConfig, SpaceConfig } from '@bh/superfield';
export const settingsFilterFields: FilterFieldConfig[] = [
  {
    ...PET_TYPE_FILTER,
    isRequired: true,
  },
];

export const contactEntitiesColumns: string[] = [...FIELD_NAMES_SPACE_MINIMUM];
export const contactEntityColumns: string[] = [...CONTACT_ENTITY_COLUMNS];

export const SPACE_API_SETTINGS = getSpaceConfig({
  canAdd: true,
  dateFields: CONTACT_DATE_FIELDS,
  url: '',
  //TODO delete
  entitiesColumns: contactEntitiesColumns,
  entityColumns: contactEntityColumns,
  model: 'Settings',
  entitySchemaName: 'Contact',
  filterConfig: settingsFilterFields,
  id: 'Settings',
});

export const SPACE_CONFIG_SETTINGS: SpaceConfig = {
  ...SPACE_API_SETTINGS,
  id: 'Settings',
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
} as const;

export default SPACE_CONFIG_SETTINGS;
