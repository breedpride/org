

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';import { RawDataModel_MediumText} from '@bh/field/config'

import { AccountType_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_AccountType} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, AccountType_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, AccountType_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, AccountType_Plugin.Description);
const RawDataModel  =
    merge({},
      RawDataModel_MediumText, AccountType_Plugin.RawDataModel)


export const ACCOUNTTYPE_FIELD_CONFIG = {

  Id,
  Name,
  Description,
  RawDataModel
} as const;


export const ACCOUNTTYPE_ENTITY_COLUMNS = getColumns(ACCOUNTTYPE_FIELD_CONFIG);

export const ACCOUNTTYPE_DATE_FIELDS = [];


export const [, , AccountType_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_AccountType,
    fieldsConfig: ACCOUNTTYPE_FIELD_CONFIG,
    entitiesColumns: ACCOUNTTYPE_ENTITY_COLUMNS,
    dateColumns: getDateColumns(ACCOUNTTYPE_FIELD_CONFIG),
  };
});

