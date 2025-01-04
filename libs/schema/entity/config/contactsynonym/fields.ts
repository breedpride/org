

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Contact_Contact} from '@bh/field/config';

import { ContactSynonym_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_ContactSynonym} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, ContactSynonym_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, ContactSynonym_Plugin.Name);
const Contact  =
    merge({},
      Contact_Contact, ContactSynonym_Plugin.Contact);


export const CONTACTSYNONYM_FIELD_CONFIG = {

  Id,
  Name,
  Contact
} as const;


export const CONTACTSYNONYM_ENTITY_COLUMNS = getColumns(CONTACTSYNONYM_FIELD_CONFIG);

export const CONTACTSYNONYM_DATE_FIELDS = [];


export const [, , ContactSynonym_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_ContactSynonym,
    fieldsConfig: CONTACTSYNONYM_FIELD_CONFIG,
    entitiesColumns: CONTACTSYNONYM_ENTITY_COLUMNS,
    dateColumns: getDateColumns(CONTACTSYNONYM_FIELD_CONFIG),
  };
});

