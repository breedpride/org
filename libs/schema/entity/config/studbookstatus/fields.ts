

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config'

import { StudbookStatus_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_StudbookStatus} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, StudbookStatus_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, StudbookStatus_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, StudbookStatus_Plugin.Description)


export const STUDBOOKSTATUS_FIELD_CONFIG = {

  Id,
  Name,
  Description
} as const;


export const STUDBOOKSTATUS_ENTITY_COLUMNS = getColumns(STUDBOOKSTATUS_FIELD_CONFIG);

export const STUDBOOKSTATUS_DATE_FIELDS = [];


export const [, , StudbookStatus_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_StudbookStatus,
    fieldsConfig: STUDBOOKSTATUS_FIELD_CONFIG,
    entitiesColumns: STUDBOOKSTATUS_ENTITY_COLUMNS,
    dateColumns: getDateColumns(STUDBOOKSTATUS_FIELD_CONFIG),
  };
});

