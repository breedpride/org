

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { CreatedOn_DateTime} from '@bh/field/config';import { CreatedBy_Contact} from '@bh/field/config';import { ModifiedOn_DateTime} from '@bh/field/config';import { ModifiedBy_Contact} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';

import { ContactSalutationType_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_ContactSalutationType} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, ContactSalutationType_Plugin.Id);
const CreatedOn  =
    merge({},
      CreatedOn_DateTime, ContactSalutationType_Plugin.CreatedOn);
const CreatedBy  =
    merge({},
      CreatedBy_Contact, ContactSalutationType_Plugin.CreatedBy);
const ModifiedOn  =
    merge({},
      ModifiedOn_DateTime, ContactSalutationType_Plugin.ModifiedOn);
const ModifiedBy  =
    merge({},
      ModifiedBy_Contact, ContactSalutationType_Plugin.ModifiedBy);
const Name  =
    merge({},
      Name_MediumText, ContactSalutationType_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, ContactSalutationType_Plugin.Description);


export const CONTACTSALUTATIONTYPE_FIELD_CONFIG = {

  Id,
  CreatedOn,
  CreatedBy,
  ModifiedOn,
  ModifiedBy,
  Name,
  Description
} as const;


export const CONTACTSALUTATIONTYPE_ENTITY_COLUMNS = getColumns(CONTACTSALUTATIONTYPE_FIELD_CONFIG);

export const CONTACTSALUTATIONTYPE_DATE_FIELDS = [];


export const [, , ContactSalutationType_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_ContactSalutationType,
    fieldsConfig: CONTACTSALUTATIONTYPE_FIELD_CONFIG,
    entitiesColumns: CONTACTSALUTATIONTYPE_ENTITY_COLUMNS,
    dateColumns: getDateColumns(CONTACTSALUTATIONTYPE_FIELD_CONFIG),
  };
});

