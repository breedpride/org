import { Injectable } from '@angular/core';
import {
  NOTE_DATE_FIELDS,
  NOTE_ENTITY_COLUMNS,
  NOTE_FIELD_CONFIG,
} from '@bh/entity/config';
import { ME } from '@bh/filtering';
import { getSpaceConfig } from '@bh/collection-store';

import { FilterFieldConfig } from '@bh/superfield';
import { FormFieldCode } from '@bh/consts';
import {
  ACCOUNT_NOTE_SCHEMA,
  LITTER_NOTE_SCHEMA,
  PET_NOTE_SCHEMA,
} from './notes-consts';

const fieldsConfig: Record<keyof typeof NOTE_FIELD_CONFIG, FilterFieldConfig> =
  {
    ...NOTE_FIELD_CONFIG,
    Name: {
      ...NOTE_FIELD_CONFIG.Name,
      component: FormFieldCode.TEXTAREA,
      placeholder: '',
    },
  };
export const noteSpaceConfig = {
  columns: [
    // ...Object.values(NOTE_FIELD_CONFIG),
    { ...NOTE_FIELD_CONFIG.CreatedOn, class: '', placeholder: 'Date' },
    { ...NOTE_FIELD_CONFIG.Name, class: '', placeholder: 'Note' },
  ],
  dateFields: NOTE_DATE_FIELDS,
  defaultEntityData: {
    Name: () => 'Default Note Name',
    Owner: () => ME,
  },
  entitiesColumns: [...NOTE_ENTITY_COLUMNS],
  entityColumns: [...NOTE_ENTITY_COLUMNS],
  entitySchemaName: 'Note',
  fieldsConfig,
  filterFields: [],
  id: 'Note',
  naming: {
    editCompomentHeaderString: 'Note',
  },
};

export const PetNoteConfig = getSpaceConfig({
  ...noteSpaceConfig,
  defaultEntityData: {
    ...noteSpaceConfig.defaultEntityData,
    EntitySchema: () => PET_NOTE_SCHEMA,
    Pet: (entity: any) => entity,
  },
  filterKey: 'Pet',
});

export const LitterNoteConfig = getSpaceConfig({
  ...noteSpaceConfig,
  defaultEntityData: {
    ...noteSpaceConfig.defaultEntityData,
    EntitySchema: () => LITTER_NOTE_SCHEMA,
    Litter: (entity: any) => entity,
  },
  filterKey: 'Litter',
});
export const AccountNoteConfig = getSpaceConfig({
  ...noteSpaceConfig,
  defaultEntityData: {
    ...noteSpaceConfig.defaultEntityData,
    Account: (entity: any) => entity,
    EntitySchema: () => ACCOUNT_NOTE_SCHEMA,
  },
  filterKey: 'Account',
});

@Injectable({
  providedIn: 'root',
})
export class NoteSpaceDetailConfigService {
  getDetailConfigByParentModel(model: string) {
    switch (model) {
      case 'Pet':
      case 'Litter':
        return this.litterNoteConfig;
      case 'Kennel':
        return this.accountNoteConfig;
    }
    console.error('Bad model');
    return this.petNoteConfig;
  }
  petNoteConfig = PetNoteConfig;
  litterNoteConfig = LitterNoteConfig;
  accountNoteConfig = AccountNoteConfig;
}
