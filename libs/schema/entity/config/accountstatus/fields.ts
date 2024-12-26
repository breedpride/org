

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config'

import { AccountStatus_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_AccountStatus} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, AccountStatus_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, AccountStatus_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, AccountStatus_Plugin.Description)


export const ACCOUNTSTATUS_FIELD_CONFIG = {

  Id,
  Name,
  Description
} as const;


export const ACCOUNTSTATUS_ENTITY_COLUMNS = getColumns(ACCOUNTSTATUS_FIELD_CONFIG);

export const ACCOUNTSTATUS_DATE_FIELDS = [];


export const [, , AccountStatus_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_AccountStatus,
    fieldsConfig: ACCOUNTSTATUS_FIELD_CONFIG,
    entitiesColumns: ACCOUNTSTATUS_ENTITY_COLUMNS,
    dateColumns: getDateColumns(ACCOUNTSTATUS_FIELD_CONFIG),
  };
});

