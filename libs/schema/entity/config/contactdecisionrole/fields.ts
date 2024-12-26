

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { CreatedOn_DateTime} from '@bh/field/config';import { CreatedBy_Contact} from '@bh/field/config';import { ModifiedOn_DateTime} from '@bh/field/config';import { ModifiedBy_Contact} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config'

import { ContactDecisionRole_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_ContactDecisionRole} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, ContactDecisionRole_Plugin.Id);
const CreatedOn  =
    merge({},
      CreatedOn_DateTime, ContactDecisionRole_Plugin.CreatedOn);
const CreatedBy  =
    merge({},
      CreatedBy_Contact, ContactDecisionRole_Plugin.CreatedBy);
const ModifiedOn  =
    merge({},
      ModifiedOn_DateTime, ContactDecisionRole_Plugin.ModifiedOn);
const ModifiedBy  =
    merge({},
      ModifiedBy_Contact, ContactDecisionRole_Plugin.ModifiedBy);
const Name  =
    merge({},
      Name_MediumText, ContactDecisionRole_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, ContactDecisionRole_Plugin.Description)


export const CONTACTDECISIONROLE_FIELD_CONFIG = {

  Id,
  CreatedOn,
  CreatedBy,
  ModifiedOn,
  ModifiedBy,
  Name,
  Description
} as const;


export const CONTACTDECISIONROLE_ENTITY_COLUMNS = getColumns(CONTACTDECISIONROLE_FIELD_CONFIG);

export const CONTACTDECISIONROLE_DATE_FIELDS = [];


export const [, , ContactDecisionRole_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_ContactDecisionRole,
    fieldsConfig: CONTACTDECISIONROLE_FIELD_CONFIG,
    entitiesColumns: CONTACTDECISIONROLE_ENTITY_COLUMNS,
    dateColumns: getDateColumns(CONTACTDECISIONROLE_FIELD_CONFIG),
  };
});

