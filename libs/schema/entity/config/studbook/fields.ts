

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';import { Account_Account} from '@bh/field/config';import { Status_StudbookStatus} from '@bh/field/config';import { Type_StudbookType} from '@bh/field/config';import { AlternateNames_MediumText} from '@bh/field/config'

import { Studbook_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_Studbook} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, Studbook_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, Studbook_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, Studbook_Plugin.Description);
const Account  =
    merge({},
      Account_Account, Studbook_Plugin.Account);
const Status  =
    merge({},
      Status_StudbookStatus, Studbook_Plugin.Status);
const Type  =
    merge({},
      Type_StudbookType, Studbook_Plugin.Type);
const AlternateNames  =
    merge({},
      AlternateNames_MediumText, Studbook_Plugin.AlternateNames)


export const STUDBOOK_FIELD_CONFIG = {

  Id,
  Name,
  Description,
  Account,
  Status,
  Type,
  AlternateNames
} as const;


export const STUDBOOK_ENTITY_COLUMNS = getColumns(STUDBOOK_FIELD_CONFIG);

export const STUDBOOK_DATE_FIELDS = [];


export const [, , Studbook_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_Studbook,
    fieldsConfig: STUDBOOK_FIELD_CONFIG,
    entitiesColumns: STUDBOOK_ENTITY_COLUMNS,
    dateColumns: getDateColumns(STUDBOOK_FIELD_CONFIG),
  };
});

