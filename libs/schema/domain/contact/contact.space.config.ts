import { ModelCodeType } from '@bh/windmill';
import { DEFAULT_LIST } from '@bh/collection-view-change';
import { FIELD_NAMES_SPACE_MINIMUM, NAME_FILTER } from '@bh/filtering';
import { CONTACT_SPACE_SORT_CONFIG } from '@bh/collection-sorting';
import { getSpaceConfig } from '@bh/collection-store';

import { SPACE_URL_CONTACT } from '@bh/space-url';
import { createInjectionToken } from 'ngxtension/create-injection-token';

export const SPACE_API_CONTACT = getSpaceConfig({
  sortConfig: CONTACT_SPACE_SORT_CONFIG,
  viewConfig: [
    {
      ...DEFAULT_LIST,
      card: ModelCodeType.CONTACT,
      loadComponent: () =>
        import('../contact/lib/contact-list-card/contact-list-card.component').then((m) => m.ContactListCardComponent),
    },
  ],
  dateFields: [],
  url: SPACE_URL_CONTACT,
  entitiesColumns: [
    ...FIELD_NAMES_SPACE_MINIMUM,
    'VerificationStatus.Name',
    'VerificationStatus.Id',
  ],
  entitySchemaName: 'Contact',
  filterConfig: [NAME_FILTER],
  id: 'Contact',
  isPublic: true,
});

export const SPACE_CONFIG_CONTACT = getSpaceConfig({
  ...SPACE_API_CONTACT,
  id: 'contacts',
  naming: {
    noSearchResults: 'There are no contacts!',
    plural: {
      no: 'no contacts',
      one: 'contact',
      other: 'contacts',
    },
    searchPlaceholder: 'Search contacts',
    title: 'Contacts',
  },
});

export const [, , CONTAC_SPACE_TOKEN] = createInjectionToken(
  () => SPACE_CONFIG_CONTACT
);
