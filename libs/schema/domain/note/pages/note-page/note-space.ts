import { FormFieldCode, ModelCodeType } from '@bh/consts';
import { DEFAULT_GRID } from '@bh/collection-view-change';
import { NOTE_ENTITY_COLUMNS, NOTE_FIELD_CONFIG } from '@bh/entity/config';
import {
  CREATED_BY_FILTER_FIELD,
  MAIN_FILTER_FIELD,
  ME,
  NAME_FILTER,
  OWNER_FILTER_FIELD,
  simpleFilterLookupField,
} from '@bh/filtering';
import { getSpaceConfig } from '@bh/collection-store';

import { SPACE_URL_NOTE, URL_MY } from '@bh/space-url';
import { BPFormGroupInterface, FilterFieldConfig } from '@bh/superfield';
import { MenuItem } from 'primeng/api';
import {
  ACCOUNTSCHEMA_ID,
  CONTACTSCHEMA_ID,
  LITTERSCHEMA_ID,
  PETSCHEMA_ID,
  PROJECTSCHEMA_ID,
} from './notes-consts';
import { createInjectionToken } from 'ngxtension/create-injection-token';

const schemaChangeFn = (
  form: BPFormGroupInterface | undefined | null,
  value: any
) => {
  if (!form) {
    return;
  }
  ['Pet', 'Contact', 'Account', 'Litter', 'Project'].forEach((fieldName) => {
    form.get(fieldName)?.setValue(null);
    form.get(fieldName)?.disable();
  });
  if (value?.Id) {
    switch (value.Id) {
      case PETSCHEMA_ID:
        form.get('Pet')?.enable();
        break;
      case CONTACTSCHEMA_ID:
        form.get('Contact')?.enable();
        break;
      case ACCOUNTSCHEMA_ID:
        form.get('Account')?.enable();
        break;
      case LITTERSCHEMA_ID:
        form.get('Litter')?.enable();
        break;
      case PROJECTSCHEMA_ID:
        form.get('Project')?.enable();
        break;
    }
  } else {
    ['Pet', 'Contact', 'Account', 'Litter', 'Project'].forEach((fieldName) => {
      form.get(fieldName)?.setValue(null);
      form.get(fieldName)?.enable();
    });
  }
};
const SPACE_MAIN_FILTER_FIELD: FilterFieldConfig = {
  ...{ ...MAIN_FILTER_FIELD, hidden: () => true },
  filterConfig: [{ ...OWNER_FILTER_FIELD }, CREATED_BY_FILTER_FIELD],
};

export const SPACE_CONFIG_NOTE = getSpaceConfig({
  canAdd: true,
  canEdit: true,
  dateFields: [],
  defaultEntityData: {
    Owner: () => ME,
  },
  entitiesColumns: [
    ...NOTE_ENTITY_COLUMNS,
    'Pet.AvatarUrl',
    'Pet.Url',
    'Breed.AvatarUrl',
    'Breed.Url',
    'Project.Url',
    'Contact.Url',
    'Account.Url',
    'Cover.Url',
    'Litter.Url',
  ],
  entityColumns: [...NOTE_ENTITY_COLUMNS],
  entitySchemaName: 'Note',
  fieldsConfig: {
    ...NOTE_FIELD_CONFIG,
    Name: {
      ...NOTE_FIELD_CONFIG.Name,
      component: FormFieldCode.TEXTAREA,
      placeholder: '',
    },
  },
  url: URL_MY + '/' + SPACE_URL_NOTE,
  filterConfig: [
    NAME_FILTER,
    SPACE_MAIN_FILTER_FIELD,
    {
      ...simpleFilterLookupField('EntitySchema'),
      component: FormFieldCode.DROPDOWN,
      entitySchemaName: 'EntitySchemaLookup',
      initFn: (form) => {
        const value = form.get('EntitySchema')?.value;
        schemaChangeFn(form, value);
      },
      onChange: ({ value, form }) => {
        schemaChangeFn(form, value);
      },
      placeholder: 'Subject',
    },
    {
      ...simpleFilterLookupField('Pet'),
      placeholder: 'Pet',
    },
    {
      ...simpleFilterLookupField('Contact'),
      placeholder: 'Contact',
    },
    {
      ...simpleFilterLookupField('Account'),
      placeholder: 'Account',
    },
    {
      ...simpleFilterLookupField('Litter'),
      placeholder: 'Litter',
    },
    {
      ...simpleFilterLookupField('Project'),
      placeholder: 'Event',
    },
  ],
  viewConfig: [
    {
      ...DEFAULT_GRID,
      card: ModelCodeType.NOTE,
      loadComponent: () =>
        import(
          '../../../note/lib/note-grid-card/note-grid-card.component'
        ).then((m) => m.NoteGridCardComponent),
    },
  ],
  id: 'myNote',
  naming: {
    editCompomentHeaderString: 'Note',
    noSearchResults: 'There are no notes!',
    plural: {
      no: 'no notes',
      one: 'note',
      other: 'notes',
    },
    searchPlaceholder: 'Search notes',
    title: 'Notes',
  },
});
export const [, , SPACE_CONFIG_NOTE_TOKEN] = createInjectionToken(
  () => SPACE_CONFIG_NOTE
);

export const NoteSpacePageMenuItem: MenuItem = {
  badge: 'Professional',
  icon: 'pi pi-bookmark',
  id: 'my-notes',
  label: 'Notes',
  mode: 'userMenu',
  queryParams: { mainFilter: 'OwnedByMe' },
  routerLink: ['/', URL_MY, SPACE_URL_NOTE],
};
