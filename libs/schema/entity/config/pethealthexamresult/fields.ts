

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { CreatedOn_DateTime} from '@bh/field/config';import { CreatedBy_Contact} from '@bh/field/config';import { ModifiedOn_DateTime} from '@bh/field/config';import { ModifiedBy_Contact} from '@bh/field/config';import { Pet_Pet} from '@bh/field/config';import { HealthExamObject_HealthExamObject} from '@bh/field/config';import { HealthExamResult_HealthExamResult} from '@bh/field/config';import { Date_Date} from '@bh/field/config';

import { PetHealthExamResult_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_PetHealthExamResult} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, PetHealthExamResult_Plugin.Id);
const CreatedOn  =
    merge({},
      CreatedOn_DateTime, PetHealthExamResult_Plugin.CreatedOn);
const CreatedBy  =
    merge({},
      CreatedBy_Contact, PetHealthExamResult_Plugin.CreatedBy);
const ModifiedOn  =
    merge({},
      ModifiedOn_DateTime, PetHealthExamResult_Plugin.ModifiedOn);
const ModifiedBy  =
    merge({},
      ModifiedBy_Contact, PetHealthExamResult_Plugin.ModifiedBy);
const Pet  =
    merge({},
      Pet_Pet, PetHealthExamResult_Plugin.Pet);
const HealthExamObject  =
    merge({},
      HealthExamObject_HealthExamObject, PetHealthExamResult_Plugin.HealthExamObject);
const HealthExamResult  =
    merge({},
      HealthExamResult_HealthExamResult, PetHealthExamResult_Plugin.HealthExamResult);
const Date  =
    merge({},
      Date_Date, PetHealthExamResult_Plugin.Date);


export const PETHEALTHEXAMRESULT_FIELD_CONFIG = {

  Id,
  CreatedOn,
  CreatedBy,
  ModifiedOn,
  ModifiedBy,
  Pet,
  HealthExamObject,
  HealthExamResult,
  Date
} as const;


export const PETHEALTHEXAMRESULT_ENTITY_COLUMNS = getColumns(PETHEALTHEXAMRESULT_FIELD_CONFIG);

export const PETHEALTHEXAMRESULT_DATE_FIELDS = [];


export const [, , PetHealthExamResult_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_PetHealthExamResult,
    fieldsConfig: PETHEALTHEXAMRESULT_FIELD_CONFIG,
    entitiesColumns: PETHEALTHEXAMRESULT_ENTITY_COLUMNS,
    dateColumns: getDateColumns(PETHEALTHEXAMRESULT_FIELD_CONFIG),
  };
});

