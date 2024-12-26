

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';import { Code_ShortText} from '@bh/field/config'

import { HealthExamObject_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_HealthExamObject} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, HealthExamObject_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, HealthExamObject_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, HealthExamObject_Plugin.Description);
const Code  =
    merge({},
      Code_ShortText, HealthExamObject_Plugin.Code)


export const HEALTHEXAMOBJECT_FIELD_CONFIG = {

  Id,
  Name,
  Description,
  Code
} as const;


export const HEALTHEXAMOBJECT_ENTITY_COLUMNS = getColumns(HEALTHEXAMOBJECT_FIELD_CONFIG);

export const HEALTHEXAMOBJECT_DATE_FIELDS = [];


export const [, , HealthExamObject_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_HealthExamObject,
    fieldsConfig: HEALTHEXAMOBJECT_FIELD_CONFIG,
    entitiesColumns: HEALTHEXAMOBJECT_ENTITY_COLUMNS,
    dateColumns: getDateColumns(HEALTHEXAMOBJECT_FIELD_CONFIG),
  };
});

