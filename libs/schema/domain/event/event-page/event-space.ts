import { Validators } from '@angular/forms';
import { ModelCodeType } from '@bh/consts';
import {FormFieldCode} from '@bh/windmill';
import { DEFAULT_LIST } from '@bh/collection-view-change';
import { byAny, NAME_FILTER, simpleFilterLookupField } from '@bh/filtering';
import { EVENT_SPACE_SORT_CONFIG } from '@bh/collection-sorting';
import { getSpaceConfig } from '@bh/collection-store';

import { SPACE_URL_EVENT } from '@bh/space-url';
import { FilterFieldConfig, SpaceConfig } from '@bh/superfield';
import { createInjectionToken } from 'ngxtension/create-injection-token';
// event
export const SPACE_API_EVENT = getSpaceConfig({
  sortConfig: EVENT_SPACE_SORT_CONFIG,
  viewConfig: [
    {
      ...DEFAULT_LIST,
      card: ModelCodeType.EVENT,
      loadComponent: () =>
        import(
          '../lib/event-list-card/event-list-card.component'
        ).then((m) => m.EventListCardComponent),
    },
  ],
  dateFields: ['CreatedOn', 'ModifiedOn', 'Event.StartDate'],
  url: SPACE_URL_EVENT,
  entitiesColumns: [
    'Name',
    'Id',
    'Event.Name',
    'Event.StartDate',
    'Status.Name',
    'Status.Id',
    'Event.Country.Name',
    'Event.Country.Id',
  ],
  entityColumns: ['Name', 'Id', 'Event.Name', 'Event.StartDate'],
  model: 'Event',
  entitySchemaName: 'Project',
  filterConfig: [
    NAME_FILTER,
    {
      ...simpleFilterLookupField('PetType'),
      component: FormFieldCode.DROPDOWN,
      onChange: (params) => {
        if (params.value?.Id) {
          ['Breed', 'Father', 'Mother'].forEach((fieldName) => {
            params.form?.get(fieldName)?.setValue(null);
          });
        }
      },
      placeholder: 'Type',
      isRequired: true,
      validators: [Validators.required],
    } as FilterFieldConfig,
    {
      ...simpleFilterLookupField('Country'),
      entitySchemaName: 'Country',
      getFilter: (options) =>
        byAny('Event.Country', options.form?.getId('Country')),
      placeholder: 'Country',
    } as FilterFieldConfig,
    {
      ...simpleFilterLookupField('Status'),
      component: FormFieldCode.DROPDOWN,
      entitySchemaName: 'ProjectStatus',
      placeholder: 'Status',
    } as FilterFieldConfig,
    {
      ...simpleFilterLookupField('Category'),
      component: FormFieldCode.DROPDOWN,
      entitySchemaName: 'ProjectCategory',
      placeholder: 'Category',
    } as FilterFieldConfig,
  ],
  id: 'Project',
  isPublic: true,
});
export const SPACE_CONFIG_EVENT: SpaceConfig = {
  ...SPACE_API_EVENT,
  id: 'events',
  naming: {
    noSearchResults: 'There are no events!',
    plural: {
      no: 'No events',
      one: 'event',
      other: 'events',
    },
    searchPlaceholder: 'Search events',
    title: 'Events',
  },
} as const;
export const [, , EVENT_SPACE_TOKEN] = createInjectionToken(
  () => SPACE_CONFIG_EVENT
);
