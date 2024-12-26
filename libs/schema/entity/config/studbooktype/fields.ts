

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config'

import { StudbookType_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_StudbookType} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, StudbookType_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, StudbookType_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, StudbookType_Plugin.Description)


export const STUDBOOKTYPE_FIELD_CONFIG = {

  Id,
  Name,
  Description
} as const;


export const STUDBOOKTYPE_ENTITY_COLUMNS = getColumns(STUDBOOKTYPE_FIELD_CONFIG);

export const STUDBOOKTYPE_DATE_FIELDS = [];


export const [, , StudbookType_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_StudbookType,
    fieldsConfig: STUDBOOKTYPE_FIELD_CONFIG,
    entitiesColumns: STUDBOOKTYPE_ENTITY_COLUMNS,
    dateColumns: getDateColumns(STUDBOOKTYPE_FIELD_CONFIG),
  };
});

