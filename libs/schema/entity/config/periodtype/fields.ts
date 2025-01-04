

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';

import { PeriodType_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_PeriodType} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, PeriodType_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, PeriodType_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, PeriodType_Plugin.Description);


export const PERIODTYPE_FIELD_CONFIG = {

  Id,
  Name,
  Description
} as const;


export const PERIODTYPE_ENTITY_COLUMNS = getColumns(PERIODTYPE_FIELD_CONFIG);

export const PERIODTYPE_DATE_FIELDS = [];


export const [, , PeriodType_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_PeriodType,
    fieldsConfig: PERIODTYPE_FIELD_CONFIG,
    entitiesColumns: PERIODTYPE_ENTITY_COLUMNS,
    dateColumns: getDateColumns(PERIODTYPE_FIELD_CONFIG),
  };
});

