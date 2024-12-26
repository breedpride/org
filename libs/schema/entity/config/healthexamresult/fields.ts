

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';import { Object_HealthExamObject} from '@bh/field/config'

import { HealthExamResult_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_HealthExamResult} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, HealthExamResult_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, HealthExamResult_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, HealthExamResult_Plugin.Description);
const Object  =
    merge({},
      Object_HealthExamObject, HealthExamResult_Plugin.Object)


export const HEALTHEXAMRESULT_FIELD_CONFIG = {

  Id,
  Name,
  Description,
  Object
} as const;


export const HEALTHEXAMRESULT_ENTITY_COLUMNS = getColumns(HEALTHEXAMRESULT_FIELD_CONFIG);

export const HEALTHEXAMRESULT_DATE_FIELDS = [];


export const [, , HealthExamResult_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_HealthExamResult,
    fieldsConfig: HEALTHEXAMRESULT_FIELD_CONFIG,
    entitiesColumns: HEALTHEXAMRESULT_ENTITY_COLUMNS,
    dateColumns: getDateColumns(HEALTHEXAMRESULT_FIELD_CONFIG),
  };
});

