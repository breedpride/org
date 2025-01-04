

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';import { UseforAccounts_Boolean} from '@bh/field/config';import { UseforContacts_Boolean} from '@bh/field/config';import { DisplayFormat_MediumText} from '@bh/field/config';

import { CommunicationType_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_CommunicationType} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, CommunicationType_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, CommunicationType_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, CommunicationType_Plugin.Description);
const UseforAccounts  =
    merge({},
      UseforAccounts_Boolean, CommunicationType_Plugin.UseforAccounts);
const UseforContacts  =
    merge({},
      UseforContacts_Boolean, CommunicationType_Plugin.UseforContacts);
const DisplayFormat  =
    merge({},
      DisplayFormat_MediumText, CommunicationType_Plugin.DisplayFormat);


export const COMMUNICATIONTYPE_FIELD_CONFIG = {

  Id,
  Name,
  Description,
  UseforAccounts,
  UseforContacts,
  DisplayFormat
} as const;


export const COMMUNICATIONTYPE_ENTITY_COLUMNS = getColumns(COMMUNICATIONTYPE_FIELD_CONFIG);

export const COMMUNICATIONTYPE_DATE_FIELDS = [];


export const [, , CommunicationType_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_CommunicationType,
    fieldsConfig: COMMUNICATIONTYPE_FIELD_CONFIG,
    entitiesColumns: COMMUNICATIONTYPE_ENTITY_COLUMNS,
    dateColumns: getDateColumns(COMMUNICATIONTYPE_FIELD_CONFIG),
  };
});

